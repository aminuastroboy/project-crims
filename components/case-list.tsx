import { cases } from '@/lib/data';
import { statusClass } from '@/lib/utils';

export function CaseList() {
  return (
    <div className="panel p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Priority Cases</h2>
        <p className="text-sm text-soft">Current investigations with active review cycles.</p>
      </div>
      <div className="space-y-4">
        {cases.slice(0, 3).map((item) => (
          <div key={item.id} className="rounded-2xl border border-line bg-slate-950/40 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-brand">{item.id}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-soft">{item.summary}</p>
              </div>
              <span className={`badge ${statusClass(item.status)}`}>{item.status}</span>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
              <p><span className="text-soft">Type:</span> {item.type}</p>
              <p><span className="text-soft">Officer:</span> {item.officer}</p>
              <p><span className="text-soft">Location:</span> {item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
