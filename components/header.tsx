"use client";

import * as React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
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
                <span className="font-medium">Lupleg</span>{" "}
                <span className="font-normal text-[#5f6368]">Antimotion</span>
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/product"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[15px] font-medium text-[#5f6368] transition-colors hover:text-[#202124] focus:text-[#202124] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Product
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-[#5f6368] hover:text-[#202124] focus:text-[#202124] data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {useCases.map((item) => (
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
