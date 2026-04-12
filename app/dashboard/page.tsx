import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';
import { MetricCard } from '@/components/metric-card';
import { ChartCard } from '@/components/chart-card';
import { CaseList } from '@/components/case-list';
import { ActivityPanel } from '@/components/activity-panel';
import { SuspectTable } from '@/components/suspect-table';
import { metrics } from '@/lib/data';

export default function DashboardPage() {
  return (
    <AppShell>
      <Topbar title="Operational Dashboard" subtitle="Monitor suspect records, active cases, and intelligence alerts." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <ChartCard />
        <ActivityPanel />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SuspectTable />
        <CaseList />
      </div>
    </AppShell>
  );
}
