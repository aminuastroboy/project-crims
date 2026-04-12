import Link from "next/link";
import { AlertTriangle, FolderKanban, Shield, Users } from "lucide-react";

const cards = [
  { title: "Total Suspects", value: "1,284", icon: Users },
  { title: "Active Cases", value: "342", icon: FolderKanban },
  { title: "Wanted Persons", value: "46", icon: Shield },
  { title: "High-Risk Alerts", value: "18", icon: AlertTriangle },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#060b16] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">CRIMS Dashboard</h1>
            <p className="mt-2 text-sm text-slate-400">Crime Intelligence Management System overview</p>
          </div>
          <div className="flex gap-3">
            <Link href="/suspects" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
              Suspect Records
            </Link>
            <Link href="/cases" className="rounded-2xl bg-blue-600 px-4 py-3 text-sm hover:bg-blue-500">
              Case Files
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, value, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">{title}</p>
                  <p className="mt-3 text-3xl font-semibold">{value}</p>
                </div>
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-medium">Operations Summary</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Frontend deployment is fixed and ready. Continue building suspect records, case timelines,
              evidence upload, and role-based access on top of this clean base.
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-medium">Quick Links</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/login" className="rounded-2xl border border-white/10 px-4 py-3 hover:bg-white/10">Login Screen</Link>
              <Link href="/suspects" className="rounded-2xl border border-white/10 px-4 py-3 hover:bg-white/10">Suspects Page</Link>
              <Link href="/cases" className="rounded-2xl border border-white/10 px-4 py-3 hover:bg-white/10">Cases Page</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
