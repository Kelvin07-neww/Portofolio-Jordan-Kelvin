import { motion as Motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const socials = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "GitHub",
    href: profile.github,
    value: "Kelvin07-neww",
    icon: "M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.98c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z",
  },
  {
    label: "Instagram",
    href: profile.instagram,
    value: "_vinn_klvn",
    icon: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zM17.1 6.9a1.1 1.1 0 101.1 1.1 1.1 1.1 0 00-1.1-1.1z",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Kontak" title="Mari Bangun Sesuatu yang Bermanfaat" description="Hubungi saya untuk kolaborasi, peluang proyek, atau diskusi seputar software engineering." />
        <Motion.div
          className="glass-card mx-auto grid max-w-5xl gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Detail Kontak</p>
            <h3 className="mt-4 text-3xl font-bold text-white">{profile.name}</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Full Stack Developer dari Indonesia yang berfokus pada aplikasi web modern, software desktop, sistem backend, API, dan database.
            </p>
          </div>
          <div className="grid gap-4">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill={social.label === "Email" ? "none" : "currentColor"} stroke={social.label === "Email" ? "currentColor" : "none"} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-slate-400">{social.label}</span>
                  <span className="break-all font-semibold text-white">{social.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
