import { Hero } from "@/components/hero";
import { DownloadSection } from "@/components/download-section";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { AudienceSection } from "@/components/audience-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TestimonialSlider />
      <AudienceSection />
      <DownloadSection />
    </main>
  );
}
