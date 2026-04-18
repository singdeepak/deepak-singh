"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            Gallery
          </Badge>

          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            A glimpse of my work & moments
          </h2>

          <p className="mt-4 text-muted-foreground max-w-lg">
            A curated collection of visuals that reflect my journey, projects,
            and creative perspective.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-square overflow-hidden rounded-xl border cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {/* Accessible title (can be visually hidden if you want) */}
          <DialogTitle className="sr-only">Image preview</DialogTitle>

          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* background glow */}
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
    </section>
  );
}
