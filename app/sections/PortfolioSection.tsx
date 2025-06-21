"use client";
import ScrollReveal from "@/app/components/animations/ScrollReveal";
import Carousel from "@/app/components/ui/Carousel";
import { projects } from "@/app/data/siteData";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <ScrollReveal>Portofolio Proyek</ScrollReveal>
      <div className="mt-8">
        <Carousel
          items={projects}
          renderItem={(project) => (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-neutral-900/50 rounded-lg">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-center text-neutral-300">
                {project.description}
              </p>
            </div>
          )}
        />
      </div>
    </section>
  );
}
