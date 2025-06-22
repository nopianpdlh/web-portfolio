import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/components/layout/ClientLayout"; // Impor komponen baru

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio anosa",
  description: "Portofolio Web Developer Kreatif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* className dipindahkan ke html agar tidak ada hydration error pada body.
        Ini adalah praktik yang lebih aman.
      */}
      <body className={inter.className}>
        {/*
          Gunakan ClientLayout untuk membungkus semua konten.
          Ini memastikan semua komponen interaktif di dalamnya hanya dirender di klien.
        */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
