export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.74)_72%)]" />
    </div>
  );
}
