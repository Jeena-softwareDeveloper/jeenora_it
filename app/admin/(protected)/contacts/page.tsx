import { prisma } from "@/lib/prisma";
import ContactsTable from "@/components/admin/ContactsTable";

export default async function ContactsAdminPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Contact Requests</h1>
        <p className="text-muted-foreground text-sm">{contacts.length} messages</p>
      </div>
      <ContactsTable contacts={contacts} />
    </div>
  );
}
