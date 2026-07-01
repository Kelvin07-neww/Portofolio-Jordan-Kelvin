import { motion as Motion } from "motion/react";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
    </Motion.div>
  );
}
