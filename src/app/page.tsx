import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import OrbitingSkills from "@/components/OrbitingSkills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background font-sans overflow-x-hidden">
      <Hero />
      <OrbitingSkills />
      <HireMe />
    </div>
  );
}
