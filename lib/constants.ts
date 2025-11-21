import { Cpu, Database, Globe, Layout, Shield, Zap } from "lucide-react";

export const PRODUCTS = [
  {
    id: "studio",
    name: "Antigravity Studio",
    description: "The next-generation IDE that defies expectations.",
    href: "/products/studio",
    icon: Layout,
    category: "Development",
    status: "Available",
  },
  {
    id: "engine",
    name: "Antigravity Engine",
    description: "High-performance runtime environment.",
    href: "/products/engine",
    icon: Zap,
    category: "Infrastructure",
    status: "Available",
  },
  {
    id: "shield",
    name: "Antigravity Shield",
    description: "Enterprise-grade security adaptation.",
    href: "/products/shield",
    icon: Shield,
    category: "Security",
    status: "Beta",
  },
  {
    id: "flow",
    name: "Antigravity Flow",
    description: "Automate your entire workflow.",
    href: "/products/flow",
    icon: Globe,
    category: "DevOps",
    status: "Available",
  },
  {
    id: "data",
    name: "Antigravity Data",
    description: "Serverless database with infinite scaling.",
    href: "/products/data",
    icon: Database,
    category: "Data",
    status: "Coming Soon",
  },
  {
    id: "core",
    name: "Antigravity Core",
    description: "UI components and utilities library.",
    href: "/products/core",
    icon: Cpu,
    category: "Development",
    status: "Available",
  },
];

