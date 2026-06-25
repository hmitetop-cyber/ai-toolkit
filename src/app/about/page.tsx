import { Brain, Target, Shield, Zap, CheckCircle, Globe } from 'lucide-react';

export const metadata = {
  title: 'About AI Toolkit — Mission, Vision & Values',
  description:
    'Learn about the mission, vision, and values behind AI Toolkit. We build AI-powered writing tools for professional creators worldwide.',
  openGraph: {
    title: 'About AI Toolkit — Mission, Vision & Values',
    description:
      'Learn about the mission, vision, and values behind AI Toolkit — the AI writing suite trusted by professionals globally.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-black pt-20">
      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-6">
                Our Story
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Empowering Creators through Innovation
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                AI Toolkit was born from a simple observation: professional writers needed more than
                just broad AI models—they needed specialized tools designed for the nuances of
                high-quality content creation.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Founded in 2024, our mission has always been to bridge the gap between artificial
                intelligence and human creativity. We build tools that handle the heavy lifting of
                grammar, structure, and summarization, allowing creators to focus on what truly
                matters: their unique perspective and voice.
              </p>
            </div>
            <div className="aspect-square rounded-3xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
              <Brain className="h-64 w-64 text-indigo-500/40 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-black border border-white/10">
            <Target className="h-10 w-10 text-indigo-500 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To provide professional-grade AI tools that enhance human productivity without
              compromising quality or authenticity. We believe in technology that empowers, not
              replaces. Every feature we ship is measured against this single guiding standard.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-black border border-white/10">
            <Zap className="h-10 w-10 text-indigo-500 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the global standard for AI-assisted writing, trusted by millions of
              professionals for its accuracy, security, and innovative approach to language
              processing. We see a future where writers and AI collaborate seamlessly every day.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The numbers speak for themselves</h2>
            <p className="text-slate-500">Measured against real-world professional use cases.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Successful Generations', value: '500M+' },
              { label: 'Accuracy Rating', value: '99.8%' },
              { label: 'Global Users', value: '1M+' },
              { label: 'Processing Speed', value: '< 2s' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              The principles that guide every feature we build, every decision we make, and every
              person who joins our mission.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6 text-indigo-500" />,
                title: 'Privacy First',
                desc: 'Your data is your own. We encrypt everything and never use your private text for model training without explicit opt-in.',
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-500" />,
                title: 'Radical Accuracy',
                desc: "We don't ship features until they meet our rigorous standards for grammatical and contextual precision across all use cases.",
              },
              {
                icon: <Globe className="h-6 w-6 text-indigo-500" />,
                title: 'User Empowerment',
                desc: "Our tools give you more control, not less. You're always in the driver's seat of your creative process — AI assists, you decide.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-colors flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Build */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why We Build What We Build
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            The average professional writer spends up to 40% of their time editing and proofreading
            rather than creating. We built AI Toolkit to reclaim that time. Our tools are precision
            instruments — not just autocorrect, but context-aware assistants that understand the
            intent behind your words.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            We obsess over latency, accuracy, and privacy. We do not monetize your writing. We
            monetize great software. That distinction defines everything we do.
          </p>
        </div>
      </section>
    </div>
  );
}
