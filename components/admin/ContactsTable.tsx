"use client";

import { useState } from "react";
import { Mail, Trash2, Eye } from "lucide-react";

type Contact = {
  id: string; name: string; email: string; phone?: string | null;
  message: string; status: string; createdAt: Date;
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  follow_up: "bg-purple-500/20 text-purple-400",
  won: "bg-green-500/20 text-green-400",
  lost: "bg-red-500/20 text-red-400",
};

export default function ContactsTable({ contacts: initial }: { contacts: Contact[] }) {
  const [contacts, setContacts] = useState(initial);
  const [selected, setSelected] = useState<Contact | null>(null);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/contacts/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    setContacts(c => c.map(x => x.id === id ? { ...x, status } : x));
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    setContacts(c => c.filter(x => x.id !== id));
  };

  return (
    <>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              {["Name", "Email", "Phone", "Status", "Date", "Actions"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-muted-foreground font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {contacts.map(c => (
              <tr key={c.id} className="hover:bg-accent transition-colors">
                <td className="px-4 py-4 font-medium text-foreground">{c.name}</td>
                <td className="px-4 py-4 text-muted-foreground">{c.email}</td>
                <td className="px-4 py-4 text-muted-foreground">{c.phone ?? "—"}</td>
                <td className="px-4 py-4">
                  <select value={c.status} onChange={e => updateStatus(c.id, e.target.value)}
                    className={`text-xs font-medium px-2 py-1 rounded-full bg-transparent cursor-pointer ${STATUS_COLORS[c.status] ?? ""}`}>
                    {["new","contacted","follow_up","won","lost"].map(s => <option key={s} value={s} className="bg-background">{s.replace("_"," ")}</option>)}
                  </select>
                </td>
                <td className="px-4 py-4 text-muted-foreground text-xs">{new Date(c.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => setSelected(c)} className="p-1.5 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground"><Eye size={14} /></button>
                    <a href={`mailto:${c.email}`} className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"><Mail size={14} /></a>
                    <button onClick={() => deleteContact(c.id)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {contacts.length === 0 && <div className="text-center py-16 text-muted-foreground">No messages yet.</div>}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-card border border-border rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground">Message from {selected.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{selected.message}</p>
            <div className="flex gap-3">
              <a href={`mailto:${selected.email}`} className="flex-1 h-10 bg-orange-600 hover:bg-orange-700 text-white text-foreground rounded-xl text-sm font-medium flex items-center justify-center gap-2"><Mail size={16} /> Reply</a>
              <button onClick={() => setSelected(null)} className="flex-1 h-10 bg-muted hover:bg-accent text-foreground rounded-xl text-sm font-medium">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
