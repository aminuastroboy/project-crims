"use client";

import Link from "next/link";
import { Shield, Lock, User2 } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#060b16] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_32%)]" />

      <div className="relative grid min-h-screen lg:grid-cols-2">
        <section className="hidden flex-col justify-between border-r border-white/10 p-10 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-300">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">CRIMS</h1>
              <p className="text-sm text-slate-400">Crime Intelligence Management System</p>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">Secure Access</p>
            <h2 className="text-4xl font-semibold leading-tight">
              Intelligence records, suspect profiles, and case oversight in one secure environment.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-400">
              Built for authorized personnel to manage criminal intelligence, maintain detailed bio records,
              and track investigations with clarity and control.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Restricted to authorized operational and intelligence units only.</p>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-300 lg:mx-0">
                <Shield className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-semibold">Sign in</h2>
              <p className="mt-2 text-sm text-slate-400">Enter your credentials to access CRIMS.</p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Username or Email</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <User2 className="h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="admin@crims.local"
                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Lock className="h-4 w-4 text-slate-500" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
              <span>Demo frontend access</span>
              <Link href="/dashboard" className="text-blue-300 hover:text-blue-200">
                Continue to dashboard
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
