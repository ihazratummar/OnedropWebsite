import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { HowItWorks } from "@/components/home/HowItWorks";

const AppShowcase = dynamic(() => import("@/components/home/AppShowcase").then(mod => mod.AppShowcase), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const CTA = dynamic(() => import("@/components/home/CTA").then(mod => mod.CTA));

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
