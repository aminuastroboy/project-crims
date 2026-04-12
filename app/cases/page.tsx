import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';
import { cases } from '@/lib/data';
import { statusClass } from '@/lib/utils';

export default function CasesPage() {
  return (
    <AppShell>
      <Topbar title="Case Management" subtitle="Review investigation summaries, priorities, and officer assignments." />
      <div className="grid gap-5 xl:grid-cols-2">
        {cases.map((item) => (
          <div key={item.id} className="panel p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-brand">{item.id}</p>
                <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-soft">{item.summary}</p>
              </div>
              <span className={`badge ${statusClass(item.status)}`}>{item.status}</span>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
              <p><span className="text-soft">Type:</span> {item.type}</p>
              <p><span className="text-soft">Priority:</span> {item.priority}</p>
              <p><span className="text-soft">Officer:</span> {item.officer}</p>
              <p><span className="text-soft">Location:</span> {item.location}</p>
              <p><span className="text-soft">Incident Date:</span> {item.incidentDate}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
