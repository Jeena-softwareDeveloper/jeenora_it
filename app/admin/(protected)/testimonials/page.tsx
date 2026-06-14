import { prisma } from "@/lib/prisma";
import AdminCrud from "@/components/admin/AdminCrud";

export default async function TestimonialsAdminPage() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Testimonials</h1>
        <p className="text-muted-foreground text-sm">{testimonials.length} reviews</p>
      </div>
      <AdminCrud
        items={testimonials}
        apiPath="/api/testimonials"
        idField="id"
        putMethod="PUT"
        entityName="Testimonial"
        fields={[
          { key: "clientName", label: "Client Name", type: "text", required: true },
          { key: "company", label: "Company", type: "text" },
          { key: "review", label: "Review", type: "textarea", required: true },
          { key: "photo", label: "Photo URL", type: "text" },
          { key: "rating", label: "Rating (1–5)", type: "number" },
          { key: "isActive", label: "Show on Website", type: "checkbox" },
        ]}
        displayFields={["clientName", "company", "rating", "isActive"]}
      />
    </div>
  );
}
