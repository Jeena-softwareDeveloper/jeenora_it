"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const monthlyLeads = [
  { month: "Jul", leads: 12 }, { month: "Aug", leads: 19 }, { month: "Sep", leads: 15 },
  { month: "Oct", leads: 22 }, { month: "Nov", leads: 28 }, { month: "Dec", leads: 18 },
  { month: "Jan", leads: 24 }, { month: "Feb", leads: 31 }, { month: "Mar", leads: 27 },
  { month: "Apr", leads: 35 }, { month: "May", leads: 29 }, { month: "Jun", leads: 35 },
];

const conversionData = [
  { name: "Won", value: 42, color: "#22c55e" },
  { name: "In Progress", value: 35, color: "#f97316" },
  { name: "Lost", value: 23, color: "#ef4444" },
];

const trafficData = [
  { name: "Organic", value: 45, color: "#f97316" },
  { name: "WhatsApp", value: 28, color: "#22c55e" },
  { name: "Referral", value: 17, color: "#a855f7" },
  { name: "Direct", value: 10, color: "#f59e0b" },
];

const TOOLTIP_STYLE = {
  backgroundColor: "#111",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "#fff",
};

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Bar chart */}
      <div className="xl:col-span-2 bg-muted border border-border rounded-2xl p-6">
        <h3 className="text-base font-semibold text-foreground mb-6">Monthly Leads (Last 12 Months)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={monthlyLeads} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Bar dataKey="leads" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie charts */}
      <div className="flex flex-col gap-6">
        <div className="bg-muted border border-border rounded-2xl p-6 flex-1">
          <h3 className="text-base font-semibold text-foreground mb-4">Conversion Rate</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={conversionData} dataKey="value" cx="50%" cy="50%" outerRadius={55} strokeWidth={0}>
                {conversionData.map(e => <Cell key={e.name} fill={e.color} />)}
              </Pie>
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }} />
              <Tooltip contentStyle={TOOLTIP_STYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-muted border border-border rounded-2xl p-6 flex-1">
          <h3 className="text-base font-semibold text-foreground mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={trafficData} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={55} strokeWidth={0}>
                {trafficData.map(e => <Cell key={e.name} fill={e.color} />)}
              </Pie>
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }} />
              <Tooltip contentStyle={TOOLTIP_STYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
