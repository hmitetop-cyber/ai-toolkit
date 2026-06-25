import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Clock, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'AI & Content Blog',
  description:
    'Insights, tutorials, and news about the future of AI in professional content creation.',
};

export default function BlogListingPage() {
  const categories = ['All', 'Technology', 'Tutorial', 'AI News', 'Case Studies'];

  return (
    <div className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">AI Toolkit Blog</h1>
            <p className="text-slate-400 text-lg md:text-xl">
              Stay ahead of the curve with our latest insights on AI writing tools, content
              strategy, and professional communication.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-white/5 border-white/10 text-white rounded-xl h-12"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === 'All' ? 'default' : 'outline'}
              className={`rounded-full px-6 ${cat === 'All' ? 'bg-indigo-600 hover:bg-indigo-500' : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
          <div className="group relative mb-20">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="aspect-[16/10] rounded-3xl bg-indigo-500/10 border border-indigo-500/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="text-indigo-400 font-bold text-2xl">Featured Article</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm font-semibold text-indigo-400 mb-4">
                  <span className="bg-indigo-400/10 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {blogPosts[0].date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 text-white font-bold group-hover:translate-x-2 transition-transform"
                >
                  Read Full Article <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all"
            >
              <div className="aspect-video bg-indigo-500/10 flex items-center justify-center">
                <div className="text-indigo-400/40 font-bold">Blog Thumbnail</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                  <span className="text-indigo-400">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get the latest AI tips in your inbox
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join over 10,000 professional writers receiving our weekly digest on AI content
            strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="name@email.com" className="bg-black/40 border-white/10 h-12" />
            <Button className="bg-indigo-600 hover:bg-indigo-500 h-12 px-8">Subscribe</Button>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Only professional insights. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
