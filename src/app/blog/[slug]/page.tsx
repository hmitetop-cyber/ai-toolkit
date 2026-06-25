import { blogPosts } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2, Link2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <article className="py-20 bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-white mb-12 transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-indigo-400 mb-6">
            <span className="bg-indigo-400/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-slate-500 font-medium">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-slate-500 font-medium">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Featured Image Placeholder */}
        <div className="aspect-video rounded-3xl bg-white/[0.03] border border-white/10 mb-12 flex items-center justify-center">
          <div className="text-slate-600 text-lg font-bold">Featured Article Image</div>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-indigo max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight 
          prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-slate-400 prose-li:text-lg
          prose-strong:text-white prose-strong:font-bold
          prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:py-2 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Share2 className="h-4 w-4 text-indigo-400" /> Share this article
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/10 hover:bg-white/5 text-slate-300 gap-2"
            >
              <Share2 className="h-3.5 w-3.5" /> Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/10 hover:bg-white/5 text-slate-300 gap-2"
            >
              <Link2 className="h-3.5 w-3.5" /> Copy Link
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/10 hover:bg-white/5 text-slate-300 gap-2"
            >
              <Copy className="h-3.5 w-3.5" /> Copy Text
            </Button>
          </div>
        </div>

        {/* Newsletter Callout */}
        <div className="mt-20 p-10 rounded-3xl bg-indigo-600 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Love this article?</h3>
            <p className="text-indigo-100">Get the next one straight in your inbox.</p>
          </div>
          <Button className="bg-white text-indigo-600 hover:bg-slate-100 font-bold px-8 h-12">
            Subscribe Now
          </Button>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-white mb-10">You might also like</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                  <div className="aspect-video rounded-2xl bg-white/[0.03] border border-white/10 mb-4 group-hover:border-indigo-500/50 transition-colors" />
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {rp.title}
                  </h4>
                  <span className="text-sm text-slate-500 mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                    Read Article <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
