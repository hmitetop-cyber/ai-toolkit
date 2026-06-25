import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Zap,
  Shield,
  Sparkles,
  FileText,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Search,
  Quote,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-400" />,
      title: 'Advanced Paraphrasing',
      description:
        'Rewrite sentences and paragraphs while maintaining the original meaning perfectly.',
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-400" />,
      title: 'Smart Summarizer',
      description:
        'Condense long articles into bite-sized summaries without losing key information.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-400" />,
      title: 'Content Humanizer',
      description:
        'Transform AI-generated text into natural, human-like content that flows better.',
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: 'Grammar Perfection',
      description: 'Detect and fix complex grammatical errors that standard checkers often miss.',
    },
  ];

  const stats = [
    { label: 'Active Users', value: '500K+' },
    { label: 'Words Processed', value: '1B+' },
    { label: 'Countries', value: '120+' },
    { label: 'Uptime', value: '99.9%' },
  ];

  const faqs = [
    {
      question: 'How accurate are the AI tools?',
      answer:
        'Our models are trained on billions of high-quality sentences to ensure industry-leading accuracy in paraphrasing and summarizing.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We encrypt all data in transit and do not store your original text longer than necessary to process it.',
    },
    {
      question: 'Can I use the tools for free?',
      answer:
        'Yes, we offer a generous free tier for casual users, with premium plans for power users who need higher limits.',
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url('https://raw.createusercontent.com/42158e00-75e7-4f6b-a34b-5b3d8c75f8d2/')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-8">
            <Zap className="mr-2 h-4 w-4" />
            <span>Introducing v2.0 with Real-time Processing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
            Professional AI Toolkit <br className="hidden md:block" /> For Modern Creators
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Unleash the power of state-of-the-art language models to paraphrase, summarize, and
            perfect your writing in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tools">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-lg px-8 py-6 rounded-xl h-auto"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white text-lg px-8 py-6 rounded-xl h-auto hover:bg-white/5"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Tools for Every Use Case
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our suite of AI-powered writing assistants helps you create better content, save time,
              and communicate more effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 transition-all"
              >
                <div className="rounded-xl bg-indigo-500/10 p-3 w-fit mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Professional Writers Choose AI Toolkit
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Native Language Support',
                  desc: 'Process text in over 50 languages with native-level accuracy.',
                },
                {
                  title: 'Plagiarism Free',
                  desc: 'Our paraphrasing tool ensures unique outputs that pass all checks.',
                },
                {
                  title: 'API Integration',
                  desc: 'Developers can easily integrate our toolkit into their own apps.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="aspect-video rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <BarChart3 className="h-32 w-32 text-indigo-500/40" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                <AccordionTrigger className="text-white hover:text-indigo-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-indigo-600 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Stay ahead with AI news</h2>
              <p className="text-indigo-100">
                Subscribe to our newsletter to receive the latest updates on AI writing tools and
                tips.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <form className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-indigo-700 border-indigo-500 text-white placeholder:text-indigo-300 h-12"
                />
                <Button className="bg-white text-indigo-600 hover:bg-slate-100 h-12 px-6">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-indigo-200 mt-3">
                We care about your data. See our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your writing?
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Join thousands of professionals who use AI Toolkit to save time and produce better
            content every day.
          </p>
          <Link href="/account/signup">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-6 text-lg rounded-xl h-auto"
            >
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
