import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { VideoSection } from "@/components/video-section";
import { Steps } from "@/components/steps";
import { PlusSection } from "@/components/plus-section";
import { PlansShowcase } from "@/components/plans-showcase";
import { Security } from "@/components/security";
import { PBSSection } from "@/components/pbs/pbs-section";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <VideoSection />
      <Steps />
      <PlusSection />
      <PlansShowcase />
      <Security />
      <PBSSection />
      <CTA />
      <Footer />
    </main>
  );
}
