import StackingCards from "@/components/common/StackingCards";
import DedicationSection from "@/components/pages/home/DedicationSection";
import HeroSection from "@/components/pages/home/HeroSection";
import ProjectsSection from "@/components/pages/home/ProjectsSection";

export default function Home() {
  return (
    <>
      <StackingCards>
        <HeroSection />
        <DedicationSection />
      </StackingCards>
      <ProjectsSection></ProjectsSection>
    </>
  );
}
