"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type Field = {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox" | "number";
  required?: boolean;
  options?: string[];
};

type Item = Record<string, unknown>;

interface Props {
  items: Item[];
  apiPath: string;
  entityName: string;
  fields: Field[];
  displayFields: string[];
  idField?: string;
  putMethod?: string;
}

function emptyForm(fields: Field[]): Item {
  return Object.fromEntries(fields.map(f => [f.key, f.type === "checkbox" ? false : f.type === "number" ? 0 : ""]));
}

export default function AdminCrud({ items: initial, apiPath, entityName, fields, displayFields, idField = "id", putMethod = "PATCH" }: Props) {
  const [items, setItems] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [form, setForm] = useState<Item>(emptyForm(fields));
  const [saving, setSaving] = useState(false);

  const openCreate = () => { setEditItem(null); setForm(emptyForm(fields)); setShowModal(true); };
  const openEdit = (item: Item) => { setEditItem(item); setForm({ ...item }); setShowModal(true); };

  const handleChange = (key: string, value: unknown) => setForm(f => ({ ...f, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    if (editItem) {
      const res = await fetch(`${apiPath}/${editItem[idField]}`, { method: putMethod, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const updated = await res.json();
      setItems(items.map(x => x[idField] === editItem[idField] ? updated : x));
    } else {
      const res = await fetch(apiPath, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const created = await res.json();
      setItems([created, ...items]);
    }
    setSaving(false);
    setShowModal(false);
  };

  const handleDelete = async (id: unknown) => {
    if (!confirm(`Delete this ${entityName}?`)) return;
    await fetch(`${apiPath}/${id}`, { method: "DELETE" });
    setItems(items.filter(x => x[idField] !== id));
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button onClick={openCreate} className="flex items-center gap-2 h-10 px-4 bg-orange-600 hover:bg-orange-700 text-white text-foreground rounded-xl text-sm font-medium transition-colors">
          <Plus size={16} /> Add {entityName}
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              {displayFields.map(f => <th key={f} className="text-left px-4 py-3 text-muted-foreground font-medium capitalize">{f}</th>)}
              <th className="text-left px-4 py-3 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.map(item => (
              <tr key={String(item[idField])} className="hover:bg-accent transition-colors">
                {displayFields.map(f => (
                  <td key={f} className="px-4 py-4 text-muted-foreground">
                    {typeof item[f] === "boolean"
                      ? <span className={`text-xs px-2 py-0.5 rounded-full ${item[f] ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"}`}>{item[f] ? "Yes" : "No"}</span>
                      : String(item[f] ?? "—")}
                  </td>
                ))}
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground"><Pencil size={14} /></button>
                    <button onClick={() => handleDelete(item[idField])} className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && <div className="text-center py-16 text-muted-foreground">No {entityName.toLowerCase()}s yet. Add one!</div>}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-[#111] border border-border rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">{editItem ? `Edit ${entityName}` : `New ${entityName}`}</h3>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              {fields.map(field => (
                <div key={field.key} className="space-y-1.5">
                  <label className="text-sm font-medium text-muted-foreground">{field.label}{field.required && " *"}</label>
                  {field.type === "textarea" ? (
                    <textarea rows={3} value={String(form[field.key] ?? "")} onChange={e => handleChange(field.key, e.target.value)}
                      className="w-full bg-background/50 border border-border rounded-xl p-3 text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  ) : field.type === "select" ? (
                    <select value={String(form[field.key] ?? "")} onChange={e => handleChange(field.key, e.target.value)}
                      className="w-full h-10 bg-background/50 border border-border rounded-xl px-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select...</option>
                      {field.options?.map(o => <option key={o} value={o} className="bg-background">{o}</option>)}
                    </select>
                  ) : field.type === "checkbox" ? (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={Boolean(form[field.key])} onChange={e => handleChange(field.key, e.target.checked)} className="w-4 h-4 accent-indigo-500" />
                      <span className="text-sm text-muted-foreground">Enabled</span>
                    </label>
                  ) : (
                    <input type={field.type} value={String(form[field.key] ?? "")} onChange={e => handleChange(field.key, e.target.value)}
                      className="w-full h-10 bg-background/50 border border-border rounded-xl px-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex-1 h-10 bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 text-foreground rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                <Save size={16} />{saving ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 bg-muted hover:bg-accent text-foreground rounded-xl text-sm font-medium">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
