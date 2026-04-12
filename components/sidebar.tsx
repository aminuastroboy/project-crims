'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, LayoutDashboard, Users, FolderKanban, FileSearch, BadgeAlert, UserCog } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/suspects', label: 'Suspects', icon: Users },
  { href: '/cases', label: 'Cases', icon: FolderKanban },
  { href: '/dashboard#evidence', label: 'Evidence', icon: FileSearch },
  { href: '/dashboard#alerts', label: 'Intelligence', icon: BadgeAlert },
  { href: '/users', label: 'Users & Roles', icon: UserCog }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-line bg-slate-950/60 lg:block">
      <div className="flex h-full flex-col p-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-brand">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide">CRIMS</p>
            <p className="text-sm text-soft">Crime Intelligence System</p>
          </div>
        </div>

        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white',
                  active && 'bg-brand/15 text-white ring-1 ring-brand/30'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto panel-muted p-4">
          <p className="text-sm font-semibold">System Status</p>
          <p className="mt-2 text-xs text-soft">Secure session active. Last sync: 2 mins ago.</p>
        </div>
      </div>
    </aside>
  );
}
