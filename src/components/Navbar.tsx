'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="rounded-lg bg-indigo-600 p-2 group-hover:bg-indigo-500 transition-colors">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">AI Toolkit</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
            <Link href="/account/signin">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Log in
              </Button>
            </Link>
            <Link href="/account/signup">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white border-none">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-white/10 px-3 flex flex-col space-y-2">
              <Link href="/account/signin" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-slate-300 hover:text-white justify-start"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/account/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white border-none">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
