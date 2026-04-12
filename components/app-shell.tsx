import { Sidebar } from '@/components/sidebar';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1 p-4 md:p-6 lg:p-8">{children}</section>
    </main>
  );
}
