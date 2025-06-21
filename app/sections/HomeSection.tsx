// import Lanyard from "@/app/components/ui/Lanyard";
import RotatingText from "@/app/components/animations/RotatingText";
import DecryptedText from "@/app/components/animations/DecryptedText";
import { anosa, roles, bio } from "@/app/data/siteData";

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
        {/* <Lanyard /> */}
      </div>
    </section>
  );
}
