import { prisma } from "@/lib/prisma";
import AdminCrud from "@/components/admin/AdminCrud";

export default async function ServicesAdminPage() {
  const services = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Services</h1>
        <p className="text-muted-foreground text-sm">{services.length} services</p>
      </div>
      <AdminCrud
        items={services}
        apiPath="/api/services"
        idField="id"
        putMethod="PUT"
        entityName="Service"
        fields={[
          { key: "title", label: "Title", type: "text", required: true },
          { key: "icon", label: "Icon (Lucide name or emoji)", type: "text", required: true },
          { key: "description", label: "Description", type: "textarea", required: true },
          { key: "isActive", label: "Active on Website", type: "checkbox" },
          { key: "sortOrder", label: "Sort Order", type: "number" },
        ]}
        displayFields={["title", "icon", "isActive"]}
      />
    </div>
  );
}
