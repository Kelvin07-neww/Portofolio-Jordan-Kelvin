import { motion as Motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Proyek" title="Karya Engineering Pilihan" description="Proyek yang menunjukkan kemampuan frontend, backend, database, autentikasi, dan pengembangan aplikasi desktop." />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              className={`glass-card overflow-hidden p-6 sm:p-8 ${project.featured ? "lg:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className={`grid gap-8 ${project.featured ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
                <div className="relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.25),transparent_38%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      {project.featured && <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-950">Unggulan</span>}
                      <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">{project.title}</h3>
                    </div>
                    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-mono text-sm text-slate-300">
                      <p>Status: <span className="text-cyan-200">{project.status}</span></p>
                      <p>Stack: <span className="text-violet-200">{project.tech.join(" / ")}</span></p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-lg leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                        <span className="mr-2 text-cyan-300">✓</span>{feature}
                      </div>
                    ))}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10">
                      Lihat Repository GitHub <span className="ml-2">-&gt;</span>
                    </a>
                  )}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
