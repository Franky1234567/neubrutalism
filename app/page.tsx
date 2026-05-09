import PageLayout from "@/layouts/PageLayout";
import HeroSection from "@/sections/HeroSection";
import CurrentlySection from "@/sections/CurrentlySection";
import WorkSection from "@/sections/WorkSection";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <CurrentlySection />
      <WorkSection />
    </PageLayout>
  );
}