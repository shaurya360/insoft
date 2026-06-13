import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductCategoriesSection } from "@/components/sections/ProductCategoriesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { RepairServicesSection } from "@/components/sections/RepairServicesSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductCategoriesSection />
      <WhyChooseUsSection />
      <RepairServicesSection />
      <BrandsSection />
      <ContactSection />
    </>
  );
}
