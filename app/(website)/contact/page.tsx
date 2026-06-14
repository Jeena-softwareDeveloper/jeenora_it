"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you. Drop us a message and we'll get back to you shortly.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-muted border border-border p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Email Us</h4>
                    <a href="mailto:hello@nexusagency.com" className="text-muted-foreground mt-1 hover:text-orange-500 transition-colors">hello@nexusagency.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Call Us</h4>
                    <a href="tel:+919876543210" className="text-muted-foreground mt-1 hover:text-purple-400 transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Our Office</h4>
                    <p className="text-muted-foreground mt-1">123 Tech Park, Silicon Valley,<br/>Mumbai, India 400001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-12 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded-xl font-semibold text-sm transition-all">
                  WhatsApp
                </a>
                <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 h-12 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 border border-orange-500/20 rounded-xl font-semibold text-sm transition-all">
                  Call Now
                </a>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden border border-border bg-muted relative flex items-center justify-center">
              <div className="absolute inset-0 bg-background/50 z-10 flex items-center justify-center">
                <p className="font-semibold text-muted-foreground">Google Maps Embed</p>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] opacity-50 bg-cover bg-center"></div>
            </div>
          </div>

          <div className="bg-muted border border-border p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-[400px] gap-4 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h4 className="text-xl font-bold text-green-400">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 h-10 px-6 bg-muted hover:bg-accent text-foreground rounded-xl text-sm font-medium transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name *</label>
                    <input type="text" id="name" required value={form.name} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address *</label>
                    <input type="email" id="email" required value={form.email} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <input type="tel" id="phone" value={form.phone} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Your Message *</label>
                  <textarea id="message" required rows={5} value={form.message} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={20} className="animate-spin" /> Sending...</>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
