"use client";

import * as React from "react";
import Link from "next/link";
import { Download, ChevronRight, Share2, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/constants";

const useCases = [
  {
    title: "E-commerce",
    href: "/use-cases/ecommerce",
    description: "Build scalable online stores with real-time inventory",
  },
  {
    title: "SaaS Applications",
    href: "/use-cases/saas",
    description: "Create powerful software-as-a-service platforms",
  },
  {
    title: "Content Management",
    href: "/use-cases/cms",
    description: "Manage and publish content with ease",
  },
  {
    title: "Enterprise Solutions",
    href: "/use-cases/enterprise",
    description: "Scale your business with enterprise-grade tools",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guides and API references",
  },
  {
    title: "Tutorials",
    href: "/tutorials",
    description: "Step-by-step learning resources",
  },
  {
    title: "Community",
    href: "/community",
    description: "Join our developer community",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get help from our support team",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  d="M3.5 19L11.5 3L19.5 19H3.5Z"
                  fill="url(#logo-gradient)"
                  stroke="none"
                />
                <path
                  d="M14 19L11.5 14L9 19H14Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="logo-gradient"
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
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {/* Products Dropdown (formerly Product Link) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-[#5f6368] hover:text-[#202124] focus:text-[#202124] data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                    {PRODUCTS.map((product) => (
                      <ListItem
                        key={product.id}
                        title={product.name}
                        href={product.href}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-[#5f6368] hover:text-[#202124] focus:text-[#202124] data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-[1.2fr_1fr] gap-0 bg-white p-0">
                    {/* Left Side */}
                    <div className="flex flex-col justify-between p-8">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-normal leading-tight text-[#202124]">
                          Intuitive for every type of
                          <br />
                          builder
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[#5f6368]">
                          Explore how Google Antigravity helps you build
                        </p>
                      </div>
                      <div className="mt-8">
                        <Button
                          variant="secondary"
                          className="h-10 rounded-full bg-[#f1f3f4] px-6 text-[14px] font-medium text-[#202124] hover:bg-[#e8eaed]"
                        >
                          See overview
                        </Button>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-center p-8">
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="group flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium text-[#202124] hover:bg-[#f8f9fa]"
                              href="#"
                            >
                              <div className="flex items-center gap-3">
                                <Share2 className="h-5 w-5 text-[#5f6368]" />
                                Professional
                              </div>
                              <ChevronRight className="h-4 w-4 text-[#5f6368] opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="group flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium text-[#202124] hover:bg-[#f8f9fa]"
                              href="#"
                            >
                              <div className="flex items-center gap-3">
                                <Code className="h-5 w-5 text-[#5f6368]" />
                                Frontend
                              </div>
                              <ChevronRight className="h-4 w-4 text-[#5f6368] opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="group flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium text-[#202124] hover:bg-[#f8f9fa]"
                              href="#"
                            >
                              <div className="flex items-center gap-3">
                                <Layers className="h-5 w-5 text-[#5f6368]" />
                                Fullstack
                              </div>
                              <ChevronRight className="h-4 w-4 text-[#5f6368] opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[15px] font-medium text-[#5f6368] transition-colors hover:text-[#202124] focus:text-[#202124] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[15px] font-medium text-[#5f6368] transition-colors hover:text-[#202124] focus:text-[#202124] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-[#5f6368] hover:text-[#202124] focus:text-[#202124] data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Download Button */}
        <div className="flex items-center">
          <Button
            className="h-11 rounded-full bg-[#1a1a1a] px-6 text-[15px] font-medium text-white hover:bg-black/90"
          >
            Download
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
