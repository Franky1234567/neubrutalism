import PageLayout from "@/layouts/PageLayout";
import ContactSection from "@/sections/ContactSection";

export const metadata = {
  title: "Contact - Franky",
  description: "Let's build something loud together.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
}