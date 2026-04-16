"use client";

import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            About Me
          </h2>

          <p className="mt-6 text-muted-foreground">
            I'm Deepak, a full-stack developer focused on building scalable,
            high-performance web applications. I work primarily with Next.js
            and Laravel, emphasizing clean architecture and maintainable code.
          </p>

          <p className="mt-4 text-muted-foreground">
            I enjoy solving real-world problems, optimizing performance,
            and designing systems that are easy to extend and scale.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-3 text-sm">
            <div>• Full-stack development (frontend + backend)</div>
            <div>• REST APIs & system design</div>
            <div>• Performance optimization</div>
            <div>• Clean, maintainable architecture</div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="border rounded-2xl p-6">
          <h3 className="font-medium mb-4">Tech Stack</h3>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Laravel",
              "Tailwind",
              "MySQL",
              "REST API",
            ].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Extra Info */}
          <div className="mt-6 text-sm text-muted-foreground space-y-2">
            <p>📍 Based in India</p>
            <p>💼 Open to freelance & full-time</p>
          </div>
        </div>

      </div>
    </section>
  );
}