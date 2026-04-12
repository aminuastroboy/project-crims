import Link from 'next/link';
import { suspects } from '@/lib/data';
import { riskClass, statusClass } from '@/lib/utils';

export function SuspectTable() {
  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-line p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Suspect Registry</h2>
          <p className="text-sm text-soft">Latest bio records and intelligence status.</p>
        </div>
        <div className="flex gap-3">
          <input className="input md:w-72" placeholder="Filter by name, alias, or code" />
          <Link href="/suspects/new" className="btn-primary whitespace-nowrap">Add Suspect</Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-950/50 text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Profile</th>
              <th className="px-5 py-4 font-medium">Code</th>
              <th className="px-5 py-4 font-medium">Location</th>
              <th className="px-5 py-4 font-medium">Risk</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Updated</th>
              <th className="px-5 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {suspects.map((suspect) => (
              <tr key={suspect.id} className="border-t border-line/70">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                      {suspect.image}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{suspect.fullName}</p>
                      <p className="text-xs text-soft">Alias: {suspect.alias}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-300">{suspect.code}</td>
                <td className="px-5 py-4 text-slate-300">{suspect.location}</td>
                <td className="px-5 py-4"><span className={`badge ${riskClass(suspect.risk)}`}>{suspect.risk}</span></td>
                <td className="px-5 py-4"><span className={`badge ${statusClass(suspect.status)}`}>{suspect.status}</span></td>
                <td className="px-5 py-4 text-slate-300">{suspect.updatedAt}</td>
                <td className="px-5 py-4">
                  <Link href={`/suspects/${suspect.id}`} className="text-brand hover:underline">View Record</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
