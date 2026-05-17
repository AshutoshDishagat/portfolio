import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import OrbitingSkills from "@/components/OrbitingSkills";
import AppShowcase from "@/components/AppShowcase";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background font-sans overflow-x-hidden">
      <AppShowcase />
      <Hero />
      <OrbitingSkills />
      <HireMe />
    </div>
  );
}
