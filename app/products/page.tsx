"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32">
      {/* Header Section */}
      <div className="container px-4 text-center">
        <h1 className="mb-6 text-5xl font-medium tracking-tight text-[#202124] md:text-6xl">
          Our Products
        </h1>
        <p className="mx-auto mb-20 max-w-2xl text-xl text-[#5f6368]">
          Everything you need to build, deploy, and scale. <br className="hidden md:block" />
          Designed for the future of web development.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-transparent bg-[#f8f9fa] p-8 transition-all hover:border-border hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm group-hover:bg-blue-50">
                    <product.icon className="h-6 w-6 text-[#5f6368] group-hover:text-[#1a73e8]" />
                  </div>
                  {product.status !== "Available" && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#5f6368] shadow-sm">
                      {product.status}
                    </span>
                  )}
                </div>
                
                <h3 className="mb-3 text-xl font-medium text-[#202124]">
                  {product.name}
                </h3>
                <p className="mb-8 text-[15px] leading-relaxed text-[#5f6368]">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center text-[#1a73e8]">
                <Link 
                  href={product.href} 
                  className="flex items-center text-sm font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mt-32 px-4 text-center">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-[#202124] px-6 py-16 text-white md:px-12">
          <h2 className="mb-6 text-3xl font-medium md:text-4xl">
            Ready to start building?
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            Join thousands of developers who are already building the future with Google Antigravity.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="h-12 rounded-full bg-white px-8 text-[15px] font-medium text-black hover:bg-white/90">
              Get Started
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-8 text-[15px] font-medium text-white hover:bg-white/10 hover:text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
