import { prisma } from "@/lib/prisma";
import SettingsForm from "@/components/admin/SettingsForm";

async function getSettings() {
  const all = await prisma.setting.findMany();
  return Object.fromEntries(all.map((s: any) => [s.key, s.value]));
}

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage company info and social links</p>
      </div>
      <SettingsForm initialSettings={settings} />
    </div>
  );
}
