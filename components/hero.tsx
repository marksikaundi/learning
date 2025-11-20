"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function HeroParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => {
        // Deterministic pseudo-random based on index
        const random = (seed: number) => {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
        };
        
        const angle = random(i) * 360;
        const distance = 100 + random(i + 100) * 800;
        const width = 4 + random(i + 200) * 6;
        const height = 2 + random(i + 300) * 2;
        const rotation = angle + 90; // Point outward
        const opacity = 0.2 + random(i + 400) * 0.5;
        
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full bg-[#4285F4]"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px) rotate(0deg)`,
              opacity,
            }}
          />
        );
      })}
      
      {/* Inner glow mask to fade center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)]" />
      {/* Outer fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_100%)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:py-32">
      <HeroParticles />
      
      <div className="relative z-10 flex max-w-5xl flex-col items-center space-y-8">
        {/* Centered Logo */}
        <div className="flex items-center gap-2.5 mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 19L11.5 3L19.5 19H3.5Z"
              fill="url(#hero-logo-gradient)"
              stroke="none"
            />
            <path
              d="M14 19L11.5 14L9 19H14Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="hero-logo-gradient"
                x1="11.5"
                y1="3"
                x2="11.5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4285F4" />
                <stop offset="0.5" stopColor="#EA4335" />
                <stop offset="1" stopColor="#FBBC05" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl text-[#202124]">
            <span className="font-medium">Google</span>{" "}
            <span className="font-normal text-[#5f6368]">Antigravity</span>
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-2">
          <h1 className="text-5xl font-medium tracking-tight text-[#202124] sm:text-6xl md:text-7xl">
            Experience liftoff
          </h1>
          <h2 className="text-4xl font-normal tracking-tight text-[#5f6368] sm:text-5xl md:text-6xl">
            with the next-generation IDE
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#1a1a1a] px-8 text-[15px] font-medium text-white hover:bg-black/90"
          >
            <svg
              className="mr-2.5 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.4 1.3.09 2.86.87 3.73 2.18-.14.08-2.23 1.31-2.2 3.91.05 3.45 3.28 4.48 3.3 4.49-.03.09-.51 1.76-1.68 3.45zm-2.7-12.9c.6-1.3 3.13-2.15 3.13-2.15s.25 2.49-1.96 4.69c-1.5 1.49-3.63 1.24-3.63 1.24s-.18-2.46 2.46-3.78z" />
            </svg>
            Download for MacOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-0 bg-secondary/50 px-8 text-[15px] font-medium text-[#202124] hover:bg-secondary"
          >
            Explore use cases
          </Button>
        </div>
      </div>
    </section>
  );
}

