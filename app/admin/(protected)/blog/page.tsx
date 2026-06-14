import { prisma } from "@/lib/prisma";
import BlogAdminTable from "@/components/admin/BlogAdminTable";

export default async function BlogAdminPage() {
  const posts = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Blog</h1>
        <p className="text-muted-foreground text-sm">{posts.length} posts</p>
      </div>
      <BlogAdminTable posts={posts} />
    </div>
  );
}
