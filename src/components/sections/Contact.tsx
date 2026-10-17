import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY, WHATSAPP_URL } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line bg-paper">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="h2">
            Request a quotation or book a repair
          </h2>
          <p className="lead">
            Send your requirement and we will reply with prices, availability and delivery time. You can also call,
            WhatsApp or visit our Nehru Place office.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <address className="not-italic">
              <dl className="space-y-6">
                <div className="flex gap-4">
                  <dt><MapPin className="mt-0.5 h-5 w-5 text-brand" aria-label="Address" /></dt>
                  <dd>
                    <span className="font-semibold">{COMPANY.name}</span>
                    <br />
                    {COMPANY.address.line1}, {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.city} – {COMPANY.address.postalCode}
                    <br />
                    <a href={COMPANY.mapsUrl} target="_blank" rel="noopener" className="link text-sm">
                      Open in Google Maps
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt><Phone className="mt-0.5 h-5 w-5 text-brand" aria-label="Phone" /></dt>
                  <dd className="flex flex-col">
                    {COMPANY.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="font-medium hover:text-brand">
                        {p.display}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt><MessageCircle className="mt-0.5 h-5 w-5 text-brand" aria-label="WhatsApp" /></dt>
                  <dd>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="font-medium hover:text-brand">
                      Chat on WhatsApp
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt><Mail className="mt-0.5 h-5 w-5 text-brand" aria-label="Email" /></dt>
                  <dd>
                    <a href={`mailto:${COMPANY.email}`} className="break-all font-medium hover:text-brand">
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt><Clock className="mt-0.5 h-5 w-5 text-brand" aria-label="Opening hours" /></dt>
                  <dd>
                    {COMPANY.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </address>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white">
              <iframe
                title="Map showing Insoft Technology, Harsh Bhawan, Nehru Place, New Delhi"
                src="https://maps.google.com/maps?q=203,+Harsh+Bhawan,+64-65+Nehru+Place,+New+Delhi+110019&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
