import Link from "next/link";

export function Footer() {
  const footerLinks = [
    { title: "About Google", href: "/about" },
    { title: "Google Products", href: "/products" },
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-6">
        {/* Google Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-normal tracking-tight">
            Google
          </Link>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

