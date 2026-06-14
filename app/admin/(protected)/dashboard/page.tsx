import { prisma } from "@/lib/prisma";
import DashboardCharts from "@/components/admin/DashboardCharts";
import { Users, TrendingUp, Monitor, Mail, IndianRupee, ArrowUpRight } from "lucide-react";

async function getStats() {
  const res = await fetch(`${process.env.NEXTAUTH_URL ?? 'http://localhost:3000'}/api/dashboard/stats`, { cache: 'no-store' });
  if (!res.ok) {
    // fallback to direct DB query if API not available at build
    const [totalLeads, newLeads, totalDemos, unreadContacts] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: 'new' } }),
      prisma.demo.count({ where: { isActive: true } }),
      prisma.contact.count({ where: { status: 'unread' } }),
    ]);
    return { totalLeads, newLeads, totalDemos, unreadContacts, wonLeads: 0, totalPosts: 0 };
  }
  return res.json();
}

export default async function DashboardPage() {
  const stats = await getStats();

  const statCards = [
    { label: "Total Leads", value: stats.totalLeads ?? 0, icon: Users, color: "indigo", change: "+12%" },
    { label: "New Leads", value: stats.newLeads ?? 0, icon: TrendingUp, color: "green", change: "+5%" },
    { label: "Active Demos", value: stats.totalDemos ?? 0, icon: Monitor, color: "purple", change: "+2" },
    { label: "Unread Messages", value: stats.unreadContacts ?? 0, icon: Mail, color: "amber", change: "" },
  ];

  const colorMap: Record<string, string> = {
    indigo: "bg-orange-500/20 text-orange-500 border-orange-500/20",
    green: "bg-green-500/20 text-green-400 border-green-500/20",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/20",
    amber: "bg-amber-500/20 text-amber-400 border-amber-500/20",
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Overview of your agency&apos;s performance</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map(card => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-muted border border-border rounded-2xl p-6 hover:bg-accent transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[card.color]}`}>
                  <Icon size={20} />
                </div>
                {card.change && (
                  <span className="flex items-center gap-1 text-xs font-medium text-green-400">
                    <ArrowUpRight size={14} />{card.change}
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{card.value}</div>
              <div className="text-sm text-muted-foreground">{card.label}</div>
            </div>
          );
        })}
      </div>
      <DashboardCharts />
    </div>
  );
}
