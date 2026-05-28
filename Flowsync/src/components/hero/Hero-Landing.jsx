
const HeroLanding = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="container sm:ml-10 lg:ml-16 px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-teal-400 uppercase tracking-[0.3em] font-semibold mb-4">
            FlowSync AI
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Build better products faster with AI-powered workflow automation.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
            Create, manage, and optimize your team’s workflows in one central hub. FlowSync blends intelligent automation,
            real-time collaboration, and actionable insights so you can move from idea to launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:ml-30 lg:ml-60 mt-5">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
