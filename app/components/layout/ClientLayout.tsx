"use client"; // Ini adalah bagian terpenting!

import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import Squares from "@/app/components/background/Squares";
import NavDock from "@/app/components/layout/NavDock";

// Definisikan rute navigasi di sini agar tidak perlu mengimpor banyak ikon di layout server
const navRoutes = [
  { label: "Home", icon: <FaHome />, href: "#home" },
  { label: "About", icon: <FaUser />, href: "#about" },
  { label: "Skills", icon: <FaCode />, href: "#skills" },
  { label: "Portfolio", icon: <FaBriefcase />, href: "#portfolio" },
  { label: "Education", icon: <FaGraduationCap />, href: "#education" },
  { label: "Contact", icon: <FaEnvelope />, href: "#contact" },
];

// Komponen ini akan menjadi "Client Boundary"
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Komponen yang bergantung pada browser sekarang aman di sini */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-15">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#555"
        />
      </div>

      {/* Konten halaman (children) diletakkan di sini */}
      <main>{children}</main>

      {/* NavDock juga aman di sini */}
      <NavDock routes={navRoutes} />
    </>
  );
}
