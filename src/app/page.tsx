import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AppShowcase } from "@/components/home/AppShowcase";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <HowItWorks />
      <AppShowcase />
      <CTA />
    </div>
  );
}
