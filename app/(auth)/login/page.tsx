import Link from 'next/link';
import { Shield, LockKeyhole, Fingerprint } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="hidden border-r border-line bg-slate-950/50 p-12 lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand">
            <Shield className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">CRIMS</h1>
            <p className="text-sm text-soft">Crime Intelligence Management System</p>
          </div>
        </div>

        <div>
          <p className="max-w-xl text-5xl font-bold leading-tight">
            Secure intelligence access for suspect bio records, cases, and operational insight.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="panel p-5">
              <LockKeyhole className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold">Protected Records</h3>
              <p className="mt-2 text-sm text-soft">Role-based access, auditable actions, and structured suspect records.</p>
            </div>
            <div className="panel p-5">
              <Fingerprint className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold">Identity & Evidence</h3>
              <p className="mt-2 text-sm text-soft">Centralized intake for bio data, documents, evidence, and linked cases.</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-soft">Authorized personnel only. Session activity is monitored.</p>
      </section>

      <section className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md panel p-8">
          <div className="mb-8 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Secure Access</p>
            <h2 className="mt-3 text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-sm text-soft">Sign in to continue to the CRIMS control panel.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="label">Officer ID / Email</label>
              <input className="input" placeholder="officer@crims.gov" />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" placeholder="••••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded border-line bg-slate-900" />
                Keep me signed in
              </label>
              <a className="text-brand" href="#">Forgot password?</a>
            </div>
            <Link href="/dashboard" className="btn-primary w-full">Access Dashboard</Link>
          </form>
        </div>
      </section>
    </main>
  );
}
