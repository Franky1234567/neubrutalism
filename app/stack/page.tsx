import PageLayout from "@/layouts/PageLayout";
import StackHero from "@/sections/StackHero";
import DailyDrivers from "@/sections/DailyDrivers";
import ExpandingInto from "@/sections/ExpandingInto";
import StackChips from "@/sections/StackChips";
import PhilosophyQuote from "@/sections/PhilosophyQuote";

const databases = [
  { label: "MySQL", rotate: 2 },
  { label: "PostgreSQL", rotate: -1 },
];

const integrations = [
  { label: "Groq API", rotate: 2 },
  { label: "Gemini API", rotate: -1 },
  { label: "Midtrans", rotate: 1 },
  { label: "Socket.io", rotate: -2 },
];

const tools = [
  { label: "Retool", rotate: 2 },
  { label: "Postman", rotate: -1 },
  { label: "Figma", rotate: 1 },
  { label: "Git", rotate: -2 },
  { label: "Jest", rotate: 3 },
];

const stateLibs = [
  { label: "Redux", rotate: 2 },
  { label: "Jotai", rotate: -1 },
];

export const metadata = {
  title: "Stack — Franky",
  description: "The tools, languages, and philosophies powering my digital constructions.",
};

export default function StackPage() {
  return (
    <PageLayout>
      <div className="w-full px-8 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-0">
        <StackHero />
        <DailyDrivers />
        <ExpandingInto />
        <StackChips title="Databases" items={databases} />
        <StackChips title="Advanced Integrations" items={integrations} />
        <StackChips
          title="Tools & Platforms"
          items={tools}
          cols="grid-cols-2 md:grid-cols-5"
        />
        <StackChips title="State Management" items={stateLibs} />
        <PhilosophyQuote />
      </div>
      </div>
    </PageLayout>
  );
}