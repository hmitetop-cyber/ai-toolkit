import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AI Toolkit support team.',
};

export default function ContactPage() {
  const faqs = [
    {
      question: 'How do I cancel my subscription?',
      answer:
        'You can cancel your subscription at any time through your account settings. Your premium access will continue until the end of your current billing period.',
    },
    {
      question: 'Do you offer custom API solutions?',
      answer:
        "Yes, we offer enterprise API access for high-volume users. Please mention 'Enterprise' in your contact request for more information.",
    },
    {
      question: 'Can I get a refund?',
      answer:
        'We offer a 7-day money-back guarantee for first-time premium subscribers if you are not satisfied with the results.',
    },
  ];

  return (
    <div className="bg-black pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Our support team is here to help you get the most out
            of AI Toolkit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Name</label>
                  <Input placeholder="John Doe" className="bg-black/50 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Email</label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    className="bg-black/50 border-white/10 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Subject</label>
                <Input
                  placeholder="How can we help?"
                  className="bg-black/50 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Message</label>
                <Textarea
                  placeholder="Tell us more about your request..."
                  className="bg-black/50 border-white/10 min-h-[150px] resize-none"
                />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-500 h-12 font-bold text-lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info & FAQ */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                <Mail className="h-6 w-6 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Support Email</h3>
                <p className="text-slate-400 text-sm">support@aitoolkit.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                <Clock className="h-6 w-6 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                <p className="text-slate-400 text-sm">Typically within 24 hours</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-indigo-400" />
                Popular Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-indigo-400 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="p-8 rounded-3xl bg-indigo-600 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Need a faster answer?</h3>
                <p className="text-indigo-100 mb-6 text-sm">
                  Check our documentation for quick guides and API references.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-indigo-600 border-none hover:bg-slate-100"
                >
                  View Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
