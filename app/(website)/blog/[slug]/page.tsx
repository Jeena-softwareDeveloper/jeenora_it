import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { mockPosts } from "@/lib/mock-data";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = mockPosts.find(p => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="pt-24 pb-24">
      <header className="container mx-auto px-4 max-w-4xl text-center mb-12 pt-12">
        <div className="inline-block bg-orange-600 text-white/20 text-orange-500 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-orange-500/20">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <User size={16} />
            {post.author.name}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden border border-border shadow-2xl">
          <Image src={post.coverImage!} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-invert prose-lg prose-indigo mx-auto mb-16 text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <Link href="/blog" className="text-orange-500 hover:text-indigo-300 font-medium flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors bg-muted px-4 py-2 rounded-full border border-border">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </article>
  );
}
