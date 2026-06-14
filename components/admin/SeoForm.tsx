"use client";

import { useState } from "react";
import { Save, Loader2, ChevronDown } from "lucide-react";

type SeoEntry = { metaTitle?: string | null; metaDesc?: string | null; keywords?: string | null; ogImage?: string | null; canonicalUrl?: string | null };

export default function SeoForm({ pages, initialSeo }: { pages: string[]; initialSeo: Record<string, SeoEntry> }) {
  const [seo, setSeo] = useState<Record<string, SeoEntry>>(
    Object.fromEntries(pages.map(p => [p, initialSeo[p] ?? {}]))
  );
  const [activePage, setActivePage] = useState(pages[0]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const update = (page: string, key: keyof SeoEntry, value: string) => {
    setSeo(s => ({ ...s, [page]: { ...s[page], [key]: value } }));
  };

  const handleSave = async () => {
    setSaving(true);
    const entry = seo[activePage];
    await fetch(`/api/seo/${activePage}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ page: activePage, ...entry }) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const fields: { key: keyof SeoEntry; label: string; placeholder: string; hint?: string }[] = [
    { key: "metaTitle", label: "Meta Title", placeholder: "50–60 chars ideal", hint: `${(seo[activePage]?.metaTitle ?? "").length}/60` },
    { key: "metaDesc", label: "Meta Description", placeholder: "150–160 chars ideal", hint: `${(seo[activePage]?.metaDesc ?? "").length}/160` },
    { key: "keywords", label: "Keywords", placeholder: "keyword1, keyword2, ..." },
    { key: "ogImage", label: "OG Image URL", placeholder: "https://..." },
    { key: "canonicalUrl", label: "Canonical URL", placeholder: "https://yourdomain.com/page" },
  ];

  return (
    <div className="bg-muted border border-border rounded-3xl p-8 space-y-6">
      {/* Page tabs */}
      <div className="flex flex-wrap gap-2">
        {pages.map(p => (
          <button key={p} onClick={() => setActivePage(p)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${activePage === p ? "bg-orange-600 text-white text-foreground" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
            {p}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {fields.map(f => (
          <div key={f.key} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">{f.label}</label>
              {f.hint && <span className="text-xs text-muted-foreground">{f.hint}</span>}
            </div>
            <input type="text" value={seo[activePage]?.[f.key] ?? ""} onChange={e => update(activePage, f.key, e.target.value)}
              placeholder={f.placeholder}
              className="w-full h-11 bg-background/50 border border-border rounded-xl px-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        ))}
      </div>

      <button onClick={handleSave} disabled={saving}
        className="flex items-center gap-2 h-11 px-6 bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 text-foreground rounded-xl font-medium text-sm">
        {saving ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : saved ? "✓ Saved!" : <><Save size={16} /> Save SEO</>}
      </button>
    </div>
  );
}
