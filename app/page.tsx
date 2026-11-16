import { AboutSection } from "@/components/AboutSection";
import { AreaSection } from "@/components/AreaSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TeamSection } from "@/components/TeamSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeedbackButton } from "@/components/FeedbackButton";
import { FeaturedProperties } from "@/components/FeaturedProperties";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProperties />
        <AreaSection />
        <AboutSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <FeedbackButton />
    </div>
  );
}
