export function MetricCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="panel p-5">
      <p className="text-sm text-soft">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-3xl font-bold">{value}</p>
        <span className="badge border-emerald-500/30 bg-emerald-500/10 text-emerald-300">{change}</span>
      </div>
    </div>
  );
}
