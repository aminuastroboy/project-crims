import { activityFeed } from '@/lib/data';

export function ActivityPanel() {
  return (
    <div className="panel p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Activity Feed</h2>
          <p className="text-sm text-soft">Latest system and investigator updates.</p>
        </div>
        <span className="text-xs text-soft">Last 24 hours</span>
      </div>

      <div className="space-y-4">
        {activityFeed.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-brand" />
            <div className="rounded-2xl border border-line bg-slate-950/40 p-3 text-sm text-slate-300">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
