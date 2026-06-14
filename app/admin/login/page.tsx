"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push(callbackUrl);
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-orange-600 text-white/20 border border-orange-500/30 mb-4">
          <Lock className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Admin Portal</h1>
        <p className="text-muted-foreground mt-2">Sign in to manage your agency</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-muted border border-border rounded-3xl p-8 space-y-5">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="admin@nexus.com"
            className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
        >
          {loading ? <><Loader2 size={18} className="animate-spin" /> Signing in...</> : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
