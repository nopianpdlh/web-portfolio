import ScrollVelocity from "@/app/components/animations/ScrollVelocity";
import { skills } from "@/app/data/siteData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 overflow-x-hidden">
      <ScrollVelocity texts={skills} scrollerClassName="text-5xl md:text-7xl" />
    </section>
  );
}
