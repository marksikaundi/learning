"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white text-center">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-50 to-transparent opacity-60 blur-[120px]" />
      </div>

      <div className="container px-4">
        <div className="mx-auto max-w-2xl">
          {/* 404 text with Google colors */}
          <h1 className="mb-2 text-8xl font-bold tracking-tighter sm:text-9xl">
            <span className="text-[#4285F4]">4</span>
            <span className="text-[#EA4335]">0</span>
            <span className="text-[#FBBC05]">4</span>
          </h1>
          
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-[#202124] sm:text-4xl">
            Page not found
          </h2>
          
          <p className="mb-10 text-lg text-[#5f6368] sm:text-xl">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-[#1a1a1a] px-8 text-[15px] font-medium hover:bg-black/90">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="h-12 rounded-full border-border px-8 text-[15px] font-medium text-[#5f6368]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
