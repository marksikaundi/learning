import { Hero } from "@/components/hero";
import { DownloadSection } from "@/components/download-section";
import { TestimonialSlider } from "@/components/testimonial-slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TestimonialSlider />
      <DownloadSection />
    </main>
  );
}
