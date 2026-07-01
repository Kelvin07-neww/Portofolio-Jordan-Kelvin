import { profile } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="font-semibold text-white">© 2026 {profile.name}.</p>
          <p className="mt-2">Dibangun dengan React + Tailwind CSS.</p>
        </div>
        <p>Dirancang dan dikembangkan oleh {profile.name}.</p>
      </div>
    </footer>
  );
};

export default Footer;
