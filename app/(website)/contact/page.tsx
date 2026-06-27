"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2, Clock, MessageSquare } from "lucide-react";

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
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Let's Talk</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Get In <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tell us about your project. Our team will analyse your requirements and get back to you with a tailored proposal within 4 business hours.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-muted border border-border p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <a href="mailto:info@jeenora.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block">info@jeenora.com</a>
                    <a href="mailto:support@jeenora.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block">support@jeenora.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <a href="tel:08029905860" className="text-muted-foreground text-sm hover:text-primary transition-colors block">080-29905860</a>
                    <a href="tel:+919606799418" className="text-muted-foreground text-sm hover:text-primary transition-colors block">+91 96067 99418</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Our Office</h4>
                    <p className="text-muted-foreground text-sm mt-1">Cottage No.4, Bangalore Palace,<br/>Vasanth Nagar, Bangalore – 560052,<br/>Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon – Fri: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-muted-foreground text-sm">Saturday: 9:00 AM – 5:00 PM IST</p>
                    <p className="text-green-600 text-sm font-medium mt-1">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="https://wa.me/919606799418" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-12 bg-green-500/10 hover:bg-green-500/20 text-green-600 border border-green-500/20 rounded-xl font-semibold text-sm transition-all">
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
                <a href="tel:+919606799418" className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl font-semibold text-sm transition-all">
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Services We Offer Quick List */}
            <div className="bg-muted border border-border p-6 rounded-3xl">
              <h4 className="font-bold text-foreground mb-4">Services You Can Enquire About</h4>
              <div className="flex flex-wrap gap-2">
                {["MFI Software", "Restaurant POS", "ERP & CRM", "Mobile Apps", "E-Commerce", "Website Design", "API Development", "Cloud Deployment", "UI/UX Design", "Software Support"].map((s, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-muted border border-border p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-6">We respond to all enquiries within 4 business hours.</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-[400px] gap-4 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h4 className="text-xl font-bold text-green-600">Message Sent Successfully!</h4>
                <p className="text-muted-foreground max-w-sm">Thank you for reaching out. Our team will review your enquiry and respond within 4 business hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 h-10 px-6 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition-colors hover:bg-primary/90">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-600 px-4 py-3 rounded-xl text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name *</label>
                    <input type="text" id="name" required value={form.name} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Your Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Business Email *</label>
                    <input type="email" id="email" required value={form.email} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone / WhatsApp Number</label>
                  <input type="tel" id="phone" value={form.phone} onChange={handleChange} className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="+91 96067 99418" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Project Description *</label>
                  <textarea id="message" required rows={5} value={form.message} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Describe your project, the problem you want to solve, and any specific requirements..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={20} className="animate-spin" /> Sending...</>
                  ) : (
                    "Send Message & Request Consultation →"
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
