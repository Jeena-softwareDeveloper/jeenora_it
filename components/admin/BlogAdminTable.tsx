"use client";

import { useState } from "react";
import { Trash2, CheckCircle, XCircle } from "lucide-react";

type Post = {
  id: string; title: string; slug: string; status: string;
  category?: string | null; author?: string | null; createdAt: Date;
};

export default function BlogAdminTable({ posts: initial }: { posts: Post[] }) {
  const [posts, setPosts] = useState(initial);

  const togglePublish = async (slug: string, status: string) => {
    const newStatus = status === 'published' ? 'draft' : 'published';
    await fetch(`/api/blog/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus, publishedAt: newStatus === 'published' ? new Date().toISOString() : null }),
    });
    setPosts(p => p.map(x => x.slug === slug ? { ...x, status: newStatus } : x));
  };

  const deletePost = async (slug: string) => {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/blog/${slug}`, { method: "DELETE" });
    setPosts(p => p.filter(x => x.slug !== slug));
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted">
            {["Title", "Category", "Author", "Status", "Date", "Actions"].map(h => (
              <th key={h} className="text-left px-4 py-3 text-muted-foreground font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {posts.map(post => (
            <tr key={post.id} className="hover:bg-accent transition-colors">
              <td className="px-4 py-4">
                <div className="font-medium text-foreground">{post.title}</div>
                <div className="text-muted-foreground text-xs">/blog/{post.slug}</div>
              </td>
              <td className="px-4 py-4 text-muted-foreground">{post.category ?? "—"}</td>
              <td className="px-4 py-4 text-muted-foreground">{post.author ?? "—"}</td>
              <td className="px-4 py-4">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${post.status === 'published' ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"}`}>
                  {post.status === 'published' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                  {post.status}
                </span>
              </td>
              <td className="px-4 py-4 text-muted-foreground text-xs">{new Date(post.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-4">
                <div className="flex gap-2">
                  <button onClick={() => togglePublish(post.slug, post.status)} className="text-xs px-2 py-1 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                    {post.status === 'published' ? "Unpublish" : "Publish"}
                  </button>
                  <button onClick={() => deletePost(post.slug)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length === 0 && <div className="text-center py-16 text-muted-foreground">No posts yet.</div>}
    </div>
  );
}
