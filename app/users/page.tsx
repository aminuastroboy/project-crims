import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';
import { users } from '@/lib/data';

export default function UsersPage() {
  return (
    <AppShell>
      <Topbar title="Users & Roles" subtitle="Manage personnel accounts, permissions, and operational units." />
      <div className="panel overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-line p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Access Control</h2>
            <p className="text-sm text-soft">Authorized officers and analysts currently onboarded in the system.</p>
          </div>
          <button className="btn-primary">Add User</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-950/50 text-slate-400">
              <tr>
                <th className="px-5 py-4 font-medium">Name</th>
                <th className="px-5 py-4 font-medium">Role</th>
                <th className="px-5 py-4 font-medium">Unit</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name} className="border-t border-line/70">
                  <td className="px-5 py-4 font-medium text-white">{user.name}</td>
                  <td className="px-5 py-4 text-slate-300">{user.role}</td>
                  <td className="px-5 py-4 text-slate-300">{user.unit}</td>
                  <td className="px-5 py-4">
                    <span className={`badge ${user.status === 'Active' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-500/40 bg-slate-500/10 text-slate-300'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-brand">Manage</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
