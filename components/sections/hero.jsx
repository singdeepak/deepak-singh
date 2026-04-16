"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <Badge variant="secondary" className="mb-6">
            Available for work
          </Badge>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Building modern, scalable web applications.
          </h1>

          <p className="mt-6 text-muted-foreground max-w-lg">
            Hi, I'm Deepak — a full-stack developer focused on performance,
            clean architecture, and production-grade systems.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>

          {/* <div className="mt-8 flex gap-5 text-muted-foreground">
            <Github className="w-5 h-5 hover:text-foreground transition" />
            <Linkedin className="w-5 h-5 hover:text-foreground transition" />
          </div> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden border">

            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-500"
              priority
            />

          </div>
        </div>

      </div>

      {/* subtle background glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
    </section>
  );
}