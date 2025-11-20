"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    role: "Frontend developer",
    description:
      "Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive tasks.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    role: "Product Manager",
    description:
      "Accelerate product cycles by automatically generating comprehensive testing scenarios and user flows.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    role: "QA Engineer",
    description:
      "Ensure flawless releases with automated regression testing that adapts to UI changes instantly.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "#",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentSlide = testimonials[currentIndex];

  return (
    <section className="container overflow-hidden px-4 py-12 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Slider Area */}
        <div className="relative w-full">
          {/* Image Card */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] md:aspect-[21/9]">
            <div className="absolute inset-0 bg-black/10" />
            <Image
              src={currentSlide.image}
              alt={currentSlide.role}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            
            {/* Centered Overlay Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-normal text-white md:text-4xl lg:text-5xl drop-shadow-md">
                {currentSlide.role}
              </h3>
            </div>

            {/* Play Button */}
            <div className="absolute bottom-8 right-8">
              <Button
                size="icon"
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
              >
                <Play className="h-5 w-5 fill-white text-white" />
              </Button>
            </div>
          </div>

          {/* Info & Navigation Bar */}
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            {/* Text Content */}
            <div className="max-w-xl space-y-4">
              <h4 className="text-xl font-medium text-[#202124]">
                {currentSlide.role}
              </h4>
              <p className="text-lg leading-relaxed text-[#5f6368]">
                {currentSlide.description}
              </p>
              <button className="group flex items-center text-sm font-medium text-[#1a73e8] hover:text-[#174ea6]">
                View case
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevSlide}
                className="h-12 w-12 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed]"
              >
                <ChevronLeft className="h-5 w-5 text-[#202124]" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextSlide}
                className="h-12 w-12 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed]"
              >
                <ChevronRight className="h-5 w-5 text-[#202124]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

