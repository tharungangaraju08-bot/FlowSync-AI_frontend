import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '🤖',
    title: 'AI Summaries',
    description: 'Instant conversation summaries so your team can catch up fast without reading every message.',
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Live messaging with fast updates, threads, and collaboration across channels and DMs.',
  },
  {
    icon: '🔎',
    title: 'Smart Search',
    description: 'Find the right discussion quickly using meaning-based search across channels and threads.',
  },
  {
    icon: '📝',
    title: 'Task Extraction',
    description: 'Automatically turn conversations into action items and keep work moving forward.',
  },
  {
    icon: '🔔',
    title: 'Notifications',
    description: 'Stay informed with smart alerts and updates that keep your team aligned and responsive.',
  },
  {
    icon: '🏢',
    title: 'Team Workspaces',
    description: 'Organize multiple teams, projects, and workspaces inside one central collaboration hub.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-slate-950 py-16 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-teal-400 uppercase tracking-[0.3em] font-semibold mb-3">Core Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Powerful tools that make team collaboration smarter.
          </h2>
          <p className="mt-4 text-slate-400 sm:text-lg">
            FlowSync combines AI, chat, and workspace organization in one polished interface that scales with your team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
