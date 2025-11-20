import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span className="font-medium">Introducing Google Antigravity</span>
        </div>
        
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build the future with{" "}
          <span className="text-primary">cutting-edge</span> technology
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Experience the next generation of web development. Fast, reliable, and beautiful applications that defy expectations.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            View Documentation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Built for speed and performance. Experience blazing-fast load times and smooth interactions.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure by Default</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security built in. Your data and applications are always protected.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Stunning UI components that work seamlessly together. Build beautiful apps effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers building amazing applications with Google Antigravity.
          </p>
          <Button size="lg" className="rounded-full">
            Start Building Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
