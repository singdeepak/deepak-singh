"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Get in Touch
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Have a project in mind or just want to connect? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button asChild size="lg">
            <a
              href="https://wa.me/919876543210?text=Hi%20Deepak%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 w-4 h-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/singdeepak" target="_blank">
            <FiGithub className="w-5 h-5 hover:text-foreground transition cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/deepaksing/" target="_blank">
            <FiLinkedin className="w-5 h-5 hover:text-foreground transition cursor-pointer" />
          </a>
        </div>

      </div>
    </section>
  );
}