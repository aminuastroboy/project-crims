export function ChartCard() {
  const bars = [48, 62, 40, 84, 55, 68, 73];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="panel p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Incident Trend</h2>
          <p className="text-sm text-soft">Weekly case intake across tracked units.</p>
        </div>
        <span className="badge border-blue-500/30 bg-blue-500/10 text-blue-300">Live</span>
      </div>
      <div className="flex h-64 items-end gap-4 rounded-2xl border border-line bg-slate-950/40 p-4">
        {bars.map((value, index) => (
          <div key={labels[index]} className="flex flex-1 flex-col items-center justify-end gap-3">
            <div
              className="w-full rounded-t-2xl bg-gradient-to-t from-brand to-blue-300/70"
              style={{ height: `${value * 2}px` }}
            />
            <span className="text-xs text-soft">{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
