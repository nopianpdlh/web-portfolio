import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavDockClient from "./components/layout/NavDockClient";
import Squares from "@/app/components/background/Squares";

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
      <body className={inter.className}>
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-15">
          <Squares
            speed={0.5}
            squareSize={50}
            direction="diagonal"
            borderColor="#333"
            hoverFillColor="#555"
          />
        </div>
        <main>{children}</main>
        <NavDockClient />
      </body>
    </html>
  );
}
