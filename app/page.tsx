import { AboutSection } from "@/components/AboutSection";
import { AreaSection } from "@/components/AreaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TeamSection } from "@/components/TeamSection";
import { VisionSection } from "@/components/VisionSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MasterPlanSection } from "@/components/MasterPlanSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AreaSection />
        <AboutSection />
        <TeamSection />
        <VisionSection />
        <ContactSection />
        <MasterPlanSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
