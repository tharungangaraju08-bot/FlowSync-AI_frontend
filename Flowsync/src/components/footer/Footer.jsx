const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-lg font-black text-white shadow-sm shadow-slate-950/30">
            FS
          </div>
          <span className="font-semibold text-white">FlowSync</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#get-started" className="transition hover:text-white">Get Started</a>
          <a href="/login" className="transition hover:text-white">Login</a>
          <a href="/signup" className="transition hover:text-white">Signup</a>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span>© 2026 FlowSync</span>
          <span className="hidden sm:inline">•</span>
          <span>GitHub placeholder</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
