"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function AudienceParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      {Array.from({ length: 60 }).map((_, i) => {
        const random = (seed: number) => {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
        };
        
        // Distributed across the width/height
        const top = random(i) * 100;
        const left = random(i + 100) * 100;
        const width = 2 + random(i + 200) * 3;
        const height = width; // Circular
        const opacity = 0.2 + random(i + 400) * 0.5;
        
        return (
          <div
            key={i}
            className="absolute rounded-full bg-black"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${width}px`,
              height: `${height}px`,
              opacity,
            }}
          />
        );
      })}
      
      {/* Fade masks */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-80" />
    </div>
  );
}

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <AudienceParticles />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-16 md:grid-cols-2 md:gap-8">
          {/* Developers Column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-[#5f6368]">
              Available at no charge
            </div>
            
            <h3 className="mb-2 text-3xl font-normal text-[#202124] md:text-4xl">
              For developers
            </h3>
            <p className="mb-10 text-3xl font-normal text-[#5f6368] md:text-4xl">
              Achieve new heights
            </p>
            
            <Button
              className="h-12 min-w-[140px] rounded-full bg-[#1a1a1a] px-8 text-[15px] font-medium text-white hover:bg-black/90"
            >
              Download
            </Button>
          </div>

          {/* Organizations Column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-[#5f6368]">
              Coming soon
            </div>
            
            <h3 className="mb-2 text-3xl font-normal text-[#202124] md:text-4xl">
              For organizations
            </h3>
            <p className="mb-10 text-3xl font-normal text-[#5f6368] md:text-4xl">
              Level up your entire team
            </p>
            
            <Button
              variant="outline"
              className="h-12 min-w-[140px] rounded-full border-border bg-[#f8f9fa] px-8 text-[15px] font-medium text-[#202124] hover:bg-[#f1f3f4]"
            >
              Notify me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

