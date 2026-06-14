"use client";

import { useState } from "react";
import { Phone, MessageCircle, Trash2, ChevronDown } from "lucide-react";

type Lead = {
  id: string; name: string; email: string | null; phone: string;
  businessType?: string | null; budget?: string | null;
  message?: string | null; status: string; source: string;
  adminNotes?: string | null; createdAt: Date;
};

const STATUS_OPTIONS = ["new", "contacted", "follow_up", "won", "lost"];
const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  contacted: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  follow_up: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  won: "bg-green-500/20 text-green-400 border-green-500/30",
  lost: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function LeadsTable({ leads: initial }: { leads: Lead[] }) {
  const [leads, setLeads] = useState(initial);
  const [notesLead, setNotesLead] = useState<Lead | null>(null);
  const [notes, setNotes] = useState("");

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    setLeads(l => l.map(x => x.id === id ? { ...x, status } : x));
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
    setLeads(l => l.filter(x => x.id !== id));
  };

  const saveNotes = async () => {
    if (!notesLead) return;
    await fetch(`/api/leads/${notesLead.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ adminNotes: notes }) });
    setLeads(l => l.map(x => x.id === notesLead.id ? { ...x, adminNotes: notes } : x));
    setNotesLead(null);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              {["Name", "Contact", "Business", "Budget", "Status", "Date", "Actions"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-muted-foreground font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leads.map(lead => (
              <tr key={lead.id} className="hover:bg-accent transition-colors">
                <td className="px-4 py-4">
                  <div className="font-medium text-foreground">{lead.name}</div>
                  <div className="text-muted-foreground text-xs">{lead.email}</div>
                </td>
                <td className="px-4 py-4">
                  {lead.phone && (
                    <div className="flex gap-2">
                      <a href={`tel:${lead.phone}`} className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                        <Phone size={14} />
                      </a>
                      <a href={`https://wa.me/${lead.phone?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20">
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  )}
                  <span className="text-muted-foreground text-xs">{lead.phone ?? "—"}</span>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{lead.businessType ?? "—"}</td>
                <td className="px-4 py-4 text-muted-foreground">{lead.budget ?? "—"}</td>
                <td className="px-4 py-4">
                  <select
                    value={lead.status}
                    onChange={e => updateStatus(lead.id, e.target.value)}
                    className={`text-xs font-medium px-2 py-1 rounded-full border bg-transparent cursor-pointer ${STATUS_COLORS[lead.status] ?? ""}`}
                  >
                    {STATUS_OPTIONS.map(s => <option key={s} value={s} className="bg-background">{s.replace("_", " ")}</option>)}
                  </select>
                </td>
                <td className="px-4 py-4 text-muted-foreground text-xs">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => { setNotesLead(lead); setNotes(lead.adminNotes ?? ""); }} className="text-xs px-2 py-1 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                      Notes
                    </button>
                    <button onClick={() => deleteLead(lead.id)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No leads yet.</div>
        )}
      </div>

      {/* Notes modal */}
      {notesLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-card border border-border rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground">Admin Notes — {notesLead.name}</h3>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={5}
              className="w-full bg-background/60 border border-border rounded-xl p-3 text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Internal notes..."
            />
            <div className="flex gap-3">
              <button onClick={saveNotes} className="flex-1 h-10 bg-orange-600 hover:bg-orange-700 text-white text-foreground rounded-xl text-sm font-medium">Save</button>
              <button onClick={() => setNotesLead(null)} className="flex-1 h-10 bg-muted hover:bg-accent text-foreground rounded-xl text-sm font-medium">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
