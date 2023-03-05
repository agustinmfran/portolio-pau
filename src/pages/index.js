import PageLayout from "@/components/PageLayout";
import InfoSection from "@/components/InfoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <PageLayout>
      <InfoSection />
      <AboutSection />
      <ProjectsSection />
    </PageLayout>
  );
}
