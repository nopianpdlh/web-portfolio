import ScrollReveal from "@/app/components/animations/ScrollReveal";
import { education, certificates } from "@/app/data/siteData";

export default function EducationCertificatesSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <ScrollReveal>Edukasi & Sertifikasi</ScrollReveal>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-purple-400 mb-6">Edukasi</h3>
        {education.map((edu, index) => (
          <ScrollReveal key={index}>
            <div className="p-6 rounded-lg bg-neutral-900/50 custom-corner-border mb-6">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-bold">{edu.institution}</h4>
                <p className="text-sm text-neutral-400">{edu.period}</p>
              </div>
              <p className="text-md text-neutral-300 mt-1">{edu.degree}</p>
              <p className="text-sm text-neutral-400 mt-2">{edu.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-purple-400 mb-6">
          Sertifikasi
        </h3>
        {certificates.map((cert, index) => (
          <ScrollReveal key={index}>
            <div className="p-6 rounded-lg bg-neutral-900/50 custom-corner-border mb-6">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-bold">{cert.title}</h4>
                <p className="text-sm text-neutral-400">{cert.year}</p>
              </div>
              <p className="text-md text-neutral-300 mt-1">{cert.issuer}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
