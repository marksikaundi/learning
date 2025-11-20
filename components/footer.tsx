import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-background px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1600px]">
        {/* Top Section: Heading and Link Columns */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <h2 className="text-3xl font-normal tracking-tight md:text-4xl">
            Experience liftoff
          </h2>

          <div className="flex gap-12 md:gap-24">
            {/* Product Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-medium">Product</h3>
              <ul className="flex flex-col space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/download" className="hover:text-foreground transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:text-foreground transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-foreground transition-colors">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-foreground transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-medium">Resources</h3>
              <ul className="flex flex-col space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases" className="hover:text-foreground transition-colors">
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Giant Text */}
        <div className="my-24 text-center md:my-32">
          <h1 className="select-none text-[12vw] font-bold leading-none tracking-tight text-foreground">
            Antigravity
          </h1>
        </div>

        {/* Bottom Section: Google Logo and Legal Links */}
        <div className="flex flex-col items-center justify-between gap-6 border-t-0 pt-0 md:flex-row">
          <Link 
            href="/" 
            className="text-[22px] font-medium text-[#5f6368] hover:opacity-80 transition-opacity dark:text-[#9aa0a6]"
          >
            Google
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="/about"
              className="text-[14px] text-[#5f6368] hover:text-[#1a73e8] transition-colors dark:text-[#9aa0a6] dark:hover:text-[#8ab4f8]"
            >
              About Google
            </Link>
            <Link
              href="/products"
              className="text-[14px] text-[#5f6368] hover:text-[#1a73e8] transition-colors dark:text-[#9aa0a6] dark:hover:text-[#8ab4f8]"
            >
              Google Products
            </Link>
            <Link
              href="/privacy"
              className="text-[14px] text-[#5f6368] hover:text-[#1a73e8] transition-colors dark:text-[#9aa0a6] dark:hover:text-[#8ab4f8]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[14px] text-[#5f6368] hover:text-[#1a73e8] transition-colors dark:text-[#9aa0a6] dark:hover:text-[#8ab4f8]"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
