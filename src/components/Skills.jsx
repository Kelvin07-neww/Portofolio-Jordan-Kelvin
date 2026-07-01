import { motion as Motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Keahlian" title="Toolkit Full Stack yang Praktis" description="Dikelompokkan berdasarkan area yang saya gunakan untuk merancang, membangun, menguji, dan mengirim aplikasi yang andal." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <Motion.article
              key={group.category}
              className="glass-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <h3 className="text-xl font-bold text-white">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100">
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
