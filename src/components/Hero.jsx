import { useState } from "react";
import { motion as Motion } from "motion/react";
import profilePhoto from "../assets/Profile.png";
import { profile } from "../data/portfolio";

const Hero = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur">
            Full Stack Developer dari Indonesia
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Membangun aplikasi modern dengan engineering yang rapi dan UI yang profesional.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Saya {profile.name}, Full Stack Developer yang berfokus pada aplikasi web, aplikasi desktop, sistem backend, API, database, UI/UX, dan artificial intelligence.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-300 to-violet-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-400/30">
              Lihat Proyek Unggulan
              <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10">
              Hubungi Saya
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {["React", "Golang", "Laravel", "Java", "MySQL", "REST API"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{item}</span>
            ))}
          </div>
        </Motion.div>

        <Motion.div className="relative mx-auto w-full max-w-md lg:max-w-none" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
          <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-cyan-300/30 to-violet-500/30 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-2xl">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Foto Profil</p>
              <div className="mt-6 rounded-[2rem] border border-cyan-300/20 bg-linear-to-br from-cyan-300/10 via-white/[0.04] to-violet-400/10 p-6 text-center">
                <div className="relative mx-auto aspect-square w-full max-w-80 overflow-hidden rounded-full border border-cyan-200/30 bg-slate-950/55 shadow-2xl shadow-cyan-500/20 ring-8 ring-white/5">
                  {!photoError ? (
                    <img
                      src={profilePhoto}
                      alt={`Foto profil ${profile.name}`}
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                      decoding="async"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    <div className="grid h-full place-items-center px-8 text-center">
                      <div>
                        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-linear-to-br from-cyan-300 to-violet-400 text-3xl font-black text-slate-950 shadow-2xl shadow-cyan-500/20">
                          JK
                        </div>
                        <p className="mt-6 text-sm leading-7 text-slate-300">
                          File foto belum bisa dimuat. Pastikan `src/assets/Profile.png` berisi gambar PNG yang valid.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="mt-7 text-2xl font-black text-white">{profile.name}</h2>
                <p className="mt-2 text-sm font-medium text-cyan-100">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
