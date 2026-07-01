import { useState } from "react";
import { motion as Motion } from "motion/react";
import { navItems, profile } from "../data/portfolio";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Jordan Kelvin Gabriel Siregar home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Jordan Kelvin</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href={`mailto:${profile.email}`} className="hidden rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10 lg:block">
          Hubungi Saya
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>

        {isOpen && (
          <Motion.div
            className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </Motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
