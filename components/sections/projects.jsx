"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            Selected work showcasing my skills and experience.
          </p>
        </div>

        {/* 🔥 Featured Project */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 border rounded-2xl p-6">
          
          {/* Image */}
          {/* <div className="relative w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/project1.jpg"
              alt="Project"
              fill
              className="object-cover"
            />
          </div> */}

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold">
              E-commerce Platform
            </h3>

            <p className="text-muted-foreground mt-3">
              A full-stack e-commerce system with cart, orders, payments,
              and admin dashboard built using Next.js and Laravel.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Next.js", "Laravel", "MySQL", "Stripe"].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button asChild size="sm">
                <Link href="#">
                  Live Demo <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild size="sm">
                <Link href="#">
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 🧩 Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Portfolio Website",
              desc: "Personal portfolio built with Next.js and Tailwind.",
            },
            {
              title: "Blog Platform",
              desc: "Full-featured blog with authentication and CMS.",
            },
            {
              title: "API System",
              desc: "REST API with authentication and rate limiting.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="border rounded-xl p-5 hover:shadow-sm transition"
            >
              <h3 className="font-medium">{project.title}</h3>

              <p className="text-sm text-muted-foreground mt-2">
                {project.desc}
              </p>

              <div className="mt-4 flex gap-3 text-sm">
                <Link href="#" className="underline">
                  Live
                </Link>
                <Link href="#" className="underline">
                  Code
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}