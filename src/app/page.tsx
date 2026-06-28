import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import OrbitingSkills from "@/components/OrbitingSkills";
import AppShowcase from "@/components/AppShowcase";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background font-sans overflow-x-hidden">
      <Hero />
      <OrbitingSkills />
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 relative z-10">
        <AppShowcase />
      </div>
      <HireMe />
    </div>
  );
}

