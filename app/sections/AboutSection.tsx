import ScrollReveal from "@/app/components/animations/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <ScrollReveal>Tentang Saya</ScrollReveal>
      <ScrollReveal
        containerClassName="mt-8"
        textClassName="font-normal text-lg md:text-xl text-neutral-300"
      >
        Dengan pengalaman bertahun-tahun di industri teknologi, saya telah
        mengasah kemampuan dalam berbagai teknologi front-end dan back-end. Saya
        menikmati proses mengubah ide-ide kompleks menjadi aplikasi yang
        fungsional dan ramah pengguna. Di luar coding, saya suka menjelajahi
        teknologi baru dan berkontribusi pada proyek open-source.
      </ScrollReveal>
    </section>
  );
}
