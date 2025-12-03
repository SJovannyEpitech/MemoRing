import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { VideoSection } from "@/components/video-section";
import { Steps } from "@/components/steps";
import { PlusSection } from "@/components/plus-section";
import { PlansShowcase } from "@/components/plans-showcase";
import { Security } from "@/components/security";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-red-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <VideoSection />
      <Steps />
      <PlusSection />
      <PlansShowcase />
      <Security />
      <CTA />
      <Footer />
    </main>
  );
}
