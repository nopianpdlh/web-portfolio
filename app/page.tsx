import Image from "next/image";
import Squares from "@/app/components/background/Squares";
import Lanyard from "@/app/components/ui/Lanyard";

export default function Home() {
  return (
    <>
      <h1 className="  text-3xl font-bold text-purple-600">
        Tailwind ESM Berhasil!
      </h1>

      <h1 className="  text-3xl font-bold text-purple-600">
        Tailwind ESM Berhasil!
      </h1>
      <h1 className="  text-3xl font-bold text-purple-600">
        Tailwind ESM Berhasil!
      </h1>
      <h1 className="  text-3xl font-bold text-purple-600">
        Tailwind ESM Berhasil!
      </h1>
      <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
    </>
  );
}
