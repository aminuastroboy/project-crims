import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';
import { SuspectTable } from '@/components/suspect-table';

export default function SuspectsPage() {
  return (
    <AppShell>
      <Topbar title="Suspect Records" subtitle="Create, review, and maintain full bio records for persons of interest." />
      <SuspectTable />
    </AppShell>
  );
}
