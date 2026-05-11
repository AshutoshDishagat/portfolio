import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import OrbitingSkills from "@/components/OrbitingSkills";
import AppShowcase from "@/components/AppShowcase";
import CopySection from "@/components/CopySection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background font-sans overflow-x-hidden">
      <CopySection />
      <AppShowcase />
      <Hero />
      <OrbitingSkills />
      <HireMe />
    </div>
  );
}
