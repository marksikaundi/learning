"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function DarkParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 100 }).map((_, i) => {
        const random = (seed: number) => {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
        };
        
        const angle = random(i) * 360;
        const distance = 50 + random(i + 100) * 600;
        const width = 3 + random(i + 200) * 4;
        const height = 2 + random(i + 300) * 3;
        const opacity = 0.4 + random(i + 400) * 0.6;
        
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full bg-[#4285F4]"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px)`,
              opacity,
              boxShadow: "0 0 10px rgba(66, 133, 244, 0.5)"
            }}
          />
        );
      })}
      
      {/* Gradient overlay to fade edges into black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_80%)]" />
    </div>
  );
}

export function DownloadSection() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-black py-24 md:py-32">
        <DarkParticles />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-4xl font-normal leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Download Google
              <br />
              Antigravity for MacOS
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-[15px] font-medium text-black hover:bg-white/90"
              >
                Download for Apple Silicon
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-0 bg-[#202124] px-8 text-[15px] font-medium text-white hover:bg-[#303134] hover:text-white"
              >
                Download for Intel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

