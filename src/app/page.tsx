import StackingCards from "@/components/common/StackingCards";
import DedicationSection from "@/components/pages/home/DedicationSection";
import HeroSection from "@/components/pages/home/HeroSection";
import ProjectsSection from "@/components/pages/home/ProjectsSection";
import { getProjects } from "@/lib/projects";

export const revalidate = 60;

export default async function Home() {
  const projects = (await getProjects()).slice(0, 7);
  return (
    <main className="overflow-hidden flex flex-col gap-24">
      <StackingCards>
        <HeroSection />
        <DedicationSection />
      </StackingCards>
      <ProjectsSection projects={projects} />
      {/*  */}
    </main>
  );
}
