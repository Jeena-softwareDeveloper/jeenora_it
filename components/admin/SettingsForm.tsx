"use client";

import { useState } from "react";
import { Save, Loader2 } from "lucide-react";

const SETTING_FIELDS = [
  { key: "company_name", label: "Company Name" },
  { key: "tagline", label: "Tagline" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "whatsapp", label: "WhatsApp Number" },
  { key: "address", label: "Address", textarea: true },
  { key: "logo_url", label: "Logo URL" },
  { key: "calendly_url", label: "Calendly Booking URL" },
  { key: "facebook_url", label: "Facebook URL" },
  { key: "instagram_url", label: "Instagram URL" },
  { key: "linkedin_url", label: "LinkedIn URL" },
  { key: "youtube_url", label: "YouTube URL" },
];

export default function SettingsForm({ initialSettings }: { initialSettings: Record<string, string> }) {
  const [settings, setSettings] = useState<Record<string, string>>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const items = Object.entries(settings).map(([key, value]) => ({ key, value }));
    await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ settings: items }) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-muted border border-border rounded-3xl p-8 space-y-6">
      {SETTING_FIELDS.map(f => (
        <div key={f.key} className="space-y-1.5">
          <label className="text-sm font-medium text-muted-foreground">{f.label}</label>
          {f.textarea ? (
            <textarea rows={3} value={settings[f.key] ?? ""} onChange={e => setSettings(s => ({ ...s, [f.key]: e.target.value }))}
              className="w-full bg-background/50 border border-border rounded-xl p-3 text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500" />
          ) : (
            <input type="text" value={settings[f.key] ?? ""} onChange={e => setSettings(s => ({ ...s, [f.key]: e.target.value }))}
              className="w-full h-11 bg-background/50 border border-border rounded-xl px-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          )}
        </div>
      ))}
      <button onClick={handleSave} disabled={saving}
        className="flex items-center gap-2 h-11 px-6 bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 text-foreground rounded-xl font-medium text-sm transition-colors">
        {saving ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : saved ? "✓ Saved!" : <><Save size={16} /> Save Settings</>}
      </button>
    </div>
  );
}
