"use client"; // Pastikan ini ada di atas jika belum

import dynamic from "next/dynamic";
import RotatingText from "@/app/components/animations/RotatingText";
import DecryptedText from "@/app/components/animations/DecryptedText";
import { anosa, roles, bio } from "@/app/data/siteData";
import { Suspense } from "react";

// Gunakan dynamic import untuk memuat Lanyard hanya di client-side
const Lanyard = dynamic(() => import("@/app/components/ui/Lanyard"), {
  ssr: false, // Ini adalah kunci utamanya: nonaktifkan Server-Side Rendering
  // Tampilkan UI sementara komponen 3D sedang dimuat
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-neutral-400">Memuat model 3D...</p>
    </div>
  ),
});

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left"
    >
      <div className="relative z-10 flex-1 p-8">
        <h1 className="text-5xl md:text-7xl font-bold">Hi, I'm {anosa.name}</h1>
        <div className="mt-4 text-2xl md:text-4xl text-purple-400 h-12">
          <RotatingText texts={roles} />
        </div>
        <div className="mt-6 max-w-xl mx-auto lg:mx-0">
          <DecryptedText
            text={bio}
            parentClassName="text-lg text-neutral-300"
            className="text-white"
            encryptedClassName="text-purple-400"
            animateOn="view"
          />
        </div>
      </div>
      <div className="relative flex-1 w-full h-96 lg:h-screen">
        {/* Gunakan Suspense untuk fallback loading jika diperlukan */}
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Lanyard />
        </Suspense>
      </div>
    </section>
  );
}
