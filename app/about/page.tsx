import PageLayout from "@/layouts/PageLayout";
import AboutHero from "@/sections/AboutHero";
import JourneySection from "@/sections/JourneySection";
import HobbiesSection from "@/sections/HobbiesSection";

export const metadata = {
  title: "About",
  description:
    "The human behind the code. Franky Rifdul mannan, frontend engineer based in Sumenep, Indonesia.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="w-full px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <AboutHero />
          <JourneySection />
          <HobbiesSection />
        </div>
      </div>
    </PageLayout>
  );
}