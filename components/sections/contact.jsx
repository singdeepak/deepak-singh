"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Mail, Github, Linkedin } from "lucide-react";

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
        {/* <div className="mt-8">
          <Button asChild size="lg">
            <a href="mailto:youremail@gmail.com">
              <Mail className="mr-2 w-4 h-4" />
              Send Email
            </a>
          </Button>
        </div> */}

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Social Links */}
        {/* <div className="flex justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/yourusername" target="_blank">
            <Github className="w-5 h-5 hover:text-foreground transition" />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-foreground transition" />
          </a>
        </div> */}

      </div>
    </section>
  );
}