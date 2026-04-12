import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';
import { cases, suspects } from '@/lib/data';
import { riskClass, statusClass } from '@/lib/utils';

export default function SuspectDetailPage({ params }: { params: { id: string } }) {
  const suspect = suspects.find((item) => item.id === params.id);
  if (!suspect) notFound();

  const linkedCases = cases.filter((item) => suspect.caseIds.includes(item.id));

  return (
    <AppShell>
      <Topbar title="Suspect Profile" subtitle="Detailed bio record, status, and linked investigations." />

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="panel p-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand/15 text-2xl font-bold text-brand">
            {suspect.image}
          </div>
          <h2 className="mt-5 text-2xl font-bold">{suspect.fullName}</h2>
          <p className="mt-1 text-soft">{suspect.code} • Alias: {suspect.alias}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className={`badge ${riskClass(suspect.risk)}`}>{suspect.risk} Risk</span>
            <span className={`badge ${statusClass(suspect.status)}`}>{suspect.status}</span>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <p><span className="text-soft">Age:</span> {suspect.age}</p>
            <p><span className="text-soft">Gender:</span> {suspect.gender}</p>
            <p><span className="text-soft">Nationality:</span> {suspect.nationality}</p>
            <p><span className="text-soft">Occupation:</span> {suspect.occupation}</p>
            <p><span className="text-soft">Phone:</span> {suspect.phone}</p>
            <p><span className="text-soft">Address:</span> {suspect.address}</p>
            <p><span className="text-soft">Last Updated:</span> {suspect.updatedAt}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-slate-950/40 p-4">
            <p className="text-sm font-semibold">Risk Score</p>
            <div className="mt-3 h-3 rounded-full bg-slate-800">
              <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-amber-400 to-red-500" />
            </div>
            <p className="mt-2 text-xs text-soft">Calculated from linked cases, notes, and watch indicators.</p>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="panel p-6">
            <div className="flex flex-wrap gap-3 border-b border-line pb-4 text-sm">
              <span className="badge border-brand/30 bg-brand/10 text-brand">Bio Data</span>
              <span className="badge border-line bg-slate-950/50 text-slate-300">Intelligence</span>
              <span className="badge border-line bg-slate-950/50 text-slate-300">Cases</span>
              <span className="badge border-line bg-slate-950/50 text-slate-300">Evidence</span>
              <span className="badge border-line bg-slate-950/50 text-slate-300">Audit Log</span>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-sm text-soft">Known Location</p>
                <p className="mt-1 font-medium">{suspect.location}</p>
              </div>
              <div>
                <p className="text-sm text-soft">Watch Status</p>
                <p className="mt-1 font-medium">{suspect.status}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-soft">Field Notes</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{suspect.notes}</p>
              </div>
            </div>
          </div>

          <div className="panel p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Linked Cases</h3>
                <p className="text-sm text-soft">Active and historical case references attached to this profile.</p>
              </div>
              <Link href="/cases" className="text-sm text-brand hover:underline">Open case registry</Link>
            </div>

            <div className="space-y-4">
              {linkedCases.length ? linkedCases.map((item) => (
                <div key={item.id} className="rounded-2xl border border-line bg-slate-950/40 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm text-brand">{item.id}</p>
                      <h4 className="mt-1 font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm text-soft">{item.summary}</p>
                    </div>
                    <span className={`badge ${statusClass(item.status)}`}>{item.status}</span>
                  </div>
                </div>
              )) : <p className="text-sm text-soft">No linked cases found.</p>}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
