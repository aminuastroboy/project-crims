import { Bell, Search, Menu } from 'lucide-react';

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-3 lg:hidden">
          <button className="btn-secondary p-3" aria-label="Open menu">
            <Menu className="h-4 w-4" />
          </button>
          <span className="text-sm text-soft">CRIMS</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-soft">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative min-w-[260px] flex-1 md:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input className="input pl-10" placeholder="Search suspects, cases, IDs..." />
        </div>
        <button className="btn-secondary p-3" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/20 font-semibold text-brand">
          AB
        </div>
      </div>
    </div>
  );
}
