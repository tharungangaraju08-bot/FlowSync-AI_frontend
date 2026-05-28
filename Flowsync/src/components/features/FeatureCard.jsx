const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="group rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/95">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-3xl shadow-md shadow-slate-950/20 transition group-hover:bg-slate-700">
        <span>{icon}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
};

export default FeatureCard;
