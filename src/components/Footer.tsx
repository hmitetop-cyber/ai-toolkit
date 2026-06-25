import Link from 'next/link';
import { Brain, Globe, Link2, ArrowUpRight, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'AI Paraphraser', href: '/tools/paraphraser' },
      { name: 'AI Summarizer', href: '/tools/summarizer' },
      { name: 'AI Humanizer', href: '/tools/humanizer' },
      { name: 'Grammar Checker', href: '/tools/grammar-checker' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/privacy#cookies' },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-lg bg-indigo-600 p-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AI Toolkit</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-400 leading-relaxed">
              Empowering writers and creators with production-ready AI tools for paraphrasing,
              summarizing, and perfecting content.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                aria-label="Website"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Share"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Link2 className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="External"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.Product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} AI Toolkit Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-slate-500">
            <Mail className="h-4 w-4" />
            <span>support@aitoolkit.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
