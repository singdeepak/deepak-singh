"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Gallery", href: "/#gallery" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Deepak.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}

          <Button size="sm">Hire Me</Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[80%]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}

                  <div className="mt-4 relative z-10">
                    <Button asChild>
                      <a
                        href="https://wa.me/919876543210?text=Hi%20Deepak%2C%20I%20am%20interested%20in%20hiring%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hire Me
                      </a>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
