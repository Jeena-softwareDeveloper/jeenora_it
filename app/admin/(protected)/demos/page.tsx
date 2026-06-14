import { prisma } from "@/lib/prisma";
import AdminCrud from "@/components/admin/AdminCrud";

export default async function DemosAdminPage() {
  const demos = await prisma.demo.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Demo Management</h1>
        <p className="text-muted-foreground text-sm">{demos.length} demos in portfolio</p>
      </div>
      <AdminCrud
        items={demos}
        apiPath="/api/demos"
        idField="id"
        putMethod="PUT"
        entityName="Demo"
        fields={[
          { key: "name", label: "Demo Name", type: "text", required: true },
          { key: "category", label: "Category", type: "select", required: true, options: ["Ecommerce","Real Estate","Restaurant","Education","Healthcare","Agency","Other"] },
          { key: "liveUrl", label: "Live URL", type: "text", required: true },
          { key: "adminUrl", label: "Admin URL", type: "text" },
          { key: "thumbnail", label: "Thumbnail URL", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "isFeatured", label: "Featured on Homepage", type: "checkbox" },
          { key: "isActive", label: "Active (visible on site)", type: "checkbox" },
          { key: "sortOrder", label: "Sort Order", type: "number" },
        ]}
        displayFields={["name", "category", "liveUrl", "isFeatured", "isActive"]}
      />
    </div>
  );
}
