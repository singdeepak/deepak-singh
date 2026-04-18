import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-10 flex flex-col gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Branding */}
          <div>
            <h3 className="font-semibold text-lg">Deepak.dev</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Building scalable, modern web applications with clean architecture.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Navigation</span>
            <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Connect</span>
            <div className="flex gap-4 mt-1">
              <a href="https://github.com/singdeepak" target="_blank">
                <FiGithub className="w-5 h-5 hover:text-foreground transition cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/deepaksing/" target="_blank">
                <FiLinkedin className="w-5 h-5 hover:text-foreground transition cursor-pointer" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Deepak Singh. All rights reserved.</p>
          {/* <p>Built with Next.js & Tailwind CSS</p> */}
        </div>

      </div>
    </footer>
  );
}