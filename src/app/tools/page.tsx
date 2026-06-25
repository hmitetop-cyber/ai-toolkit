import Link from 'next/link';
import { ArrowRightLeft, FileText, Sparkles, CheckCircle, ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI Tools Hub',
  description:
    'Explore our collection of production-ready AI tools designed to enhance your writing and content creation.',
};

const tools = [
  {
    title: 'AI Paraphraser',
    description:
      'Rewrite sentences and paragraphs while maintaining context and meaning perfectly.',
    href: '/tools/paraphraser',
    icon: <ArrowRightLeft className="h-8 w-8 text-blue-400" />,
    color: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/50',
  },
  {
    title: 'AI Summarizer',
    description:
      'Instantly condense lengthy articles, documents, and reports into concise summaries.',
    href: '/tools/summarizer',
    icon: <FileText className="h-8 w-8 text-indigo-400" />,
    color: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/50',
  },
  {
    title: 'AI Humanizer',
    description:
      'Transform AI-generated text into natural, human-like content with professional flow.',
    href: '/tools/humanizer',
    icon: <Sparkles className="h-8 w-8 text-purple-400" />,
    color: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/50',
  },
  {
    title: 'Grammar Checker',
    description:
      'Advanced grammatical error detection and correction for high-quality professional writing.',
    href: '/tools/grammar-checker',
    icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
    color: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/50',
  },
];

export default function ToolsHub() {
  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-white mb-6">
            <Brain className="mr-2 h-4 w-4 text-indigo-400" />
            <span>Powering Professional Writing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Everything you need for <br className="hidden md:block" /> perfect content
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose from our professional suite of AI tools designed to help you write better,
            faster, and more effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} className="group">
              <div
                className={`h-full p-8 md:p-10 rounded-3xl bg-white/[0.02] border ${tool.border} ${tool.hoverBorder} transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div
                  className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mb-8 ring-1 ring-white/5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tool.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  {tool.title}
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg mb-8">{tool.description}</p>

                <div className="flex items-center text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  Try it now
                  <span className="ml-2 h-px w-4 bg-white/20 group-hover:bg-indigo-400/50 group-hover:w-8 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
