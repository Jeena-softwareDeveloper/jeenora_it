import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { mockPosts } from "@/lib/mock-data";

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Agency <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Insights</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Read our latest articles on web design, ecommerce strategies, and SEO to stay ahead of the curve.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map(post => (
            <article key={post.id} className="group rounded-2xl overflow-hidden border border-border bg-muted hover:border-border transition-all duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                <Image src={post.coverImage!} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author.name}
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-auto text-orange-500 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
