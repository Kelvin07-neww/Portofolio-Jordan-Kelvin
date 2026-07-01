import { motion as Motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const highlights = [
  "Aplikasi web modern",
  "Pengembangan aplikasi desktop",
  "Sistem backend dan API",
  "Database, AI, dan antarmuka yang user-friendly",
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Tentang" title="Developer dengan Pendekatan Produk" description="Saya menggabungkan dasar software engineering dengan pemikiran UI/UX untuk membangun aplikasi yang andal, jelas, dan bermanfaat." />

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Motion.div
            className="glass-card p-8 sm:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg leading-9 text-slate-200">{profile.about}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200">
                  <span className="mr-2 text-cyan-300">/</span>{item}
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            className="glass-card relative overflow-hidden p-8 sm:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Fokus Saat Ini</p>
            <h3 className="mt-4 text-3xl font-bold text-white">Software yang scalable, efisien, dan mudah digunakan.</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Pekerjaan saya mencakup antarmuka frontend, arsitektur backend, autentikasi, database, dan sistem desktop. Saya mengutamakan kode yang mudah dibaca, arsitektur yang praktis, desain responsif, dan pembelajaran berkelanjutan.
            </p>
            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm leading-7 text-cyan-50">
                Terbuka untuk kolaborasi, magang, freelance, dan proyek yang melibatkan React, Golang, Laravel, Java, API, atau sistem berbasis database.
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
