import { NextResponse } from "next/server";
import { ENQUIRY_TOPICS } from "@/lib/site";

// Contact-form endpoint. Saves enquiries to Supabase (table public.enquiries)
// through the submit_enquiry() database function, which validates and rate-limits.
// Enquiries appear in the INSOFT admin app under "Enquiries".

const TOPICS = new Set(ENQUIRY_TOPICS);

type Enquiry = { name: string; phone: string; email: string; company: string; topic: string; message: string };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Email alert for a saved enquiry, sent through Resend (https://resend.com).
// Optional: skipped unless RESEND_API_KEY and ENQUIRY_ALERT_EMAIL are set. A failed alert never
// fails the submission — the enquiry is already saved and visible in the admin app.
async function sendAlert(e: Enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_ALERT_EMAIL;
  if (!apiKey || !to) return;
  const from = process.env.ENQUIRY_ALERT_FROM || "Insoft Website <onboarding@resend.dev>";
  const rows: [string, string][] = [
    ["Name", e.name],
    ["Company", e.company],
    ["Phone", e.phone],
    ["Email", e.email],
    ["Topic", e.topic],
  ];
  const html = `<h2 style="margin:0 0 12px">New website enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="color:#555">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table>
<p style="white-space:pre-wrap;border-left:3px solid #0056b3;padding-left:12px">${escapeHtml(e.message)}</p>
<p style="color:#555">Also saved in the INSOFT admin app under Website Enquiries.</p>`;
  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", e.message].join("\n");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        subject: `New enquiry: ${e.name}${e.company ? ` (${e.company})` : ""}${e.topic ? ` · ${e.topic}` : ""}`,
        html,
        text,
        ...(e.email ? { reply_to: e.email } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("Enquiry alert: Resend error", res.status, await res.text().catch(() => ""));
  } catch (err) {
    console.error("Enquiry alert: request failed", err);
  }
}

type Body = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  company?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown; // honeypot — real visitors never fill it
  startedAt?: unknown; // ms timestamp when the form was rendered
};

const str = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots: filled honeypot or submitted implausibly fast → pretend success, store nothing.
  const started = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (str(body.website, 200) || (started && Date.now() - started < 2500)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const email = str(body.email, 200).toLowerCase();
  const company = str(body.company, 160);
  const topic = TOPICS.has(str(body.topic, 80)) ? str(body.topic, 80) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 4000) : "";

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!phone && !email) return NextResponse.json({ error: "Please enter a phone number or email address." }, { status: 422 });
  if (phone && !/^[+\d][\d\s()-]{6,}$/.test(phone)) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 422 });
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  if (!message) return NextResponse.json({ error: "Please tell us what you need." }, { status: 422 });

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("Enquiry form: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return NextResponse.json({ error: "The form is temporarily unavailable. Please call or WhatsApp us." }, { status: 503 });
  }

  try {
    const res = await fetch(`${url}/rest/v1/rpc/submit_enquiry`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        p_name: name,
        p_phone: phone || null,
        p_email: email || null,
        p_company: company || null,
        p_topic: topic || null,
        p_message: message,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const msg = typeof data?.message === "string" && /^(Please|Too many)/.test(data.message) ? data.message : null;
      if (!msg) console.error("Enquiry form: Supabase error", res.status, data);
      return NextResponse.json(
        { error: msg ?? "We couldn't send your message. Please call or WhatsApp us." },
        { status: msg ? 422 : 502 },
      );
    }
    await sendAlert({ name, phone, email, company, topic, message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Enquiry form: request failed", e);
    return NextResponse.json({ error: "We couldn't send your message. Please call or WhatsApp us." }, { status: 502 });
  }
}
