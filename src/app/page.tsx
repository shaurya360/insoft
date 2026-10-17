import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Clients } from "@/components/sections/Clients";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Products />
      <Services />
      <WhyUs />
      <Clients />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
