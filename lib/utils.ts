import clsx from 'clsx';

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function riskClass(risk: string) {
  switch (risk) {
    case 'Critical':
      return 'border-red-500/40 bg-red-500/10 text-red-300';
    case 'High':
      return 'border-orange-500/40 bg-orange-500/10 text-orange-300';
    case 'Medium':
      return 'border-amber-500/40 bg-amber-500/10 text-amber-300';
    default:
      return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
  }
}

export function statusClass(status: string) {
  switch (status) {
    case 'Wanted':
      return 'border-red-500/40 bg-red-500/10 text-red-300';
    case 'Watchlist':
      return 'border-blue-500/40 bg-blue-500/10 text-blue-300';
    case 'Detained':
      return 'border-purple-500/40 bg-purple-500/10 text-purple-300';
    case 'Open':
      return 'border-red-500/40 bg-red-500/10 text-red-300';
    case 'Under Review':
      return 'border-amber-500/40 bg-amber-500/10 text-amber-300';
    case 'In Court':
      return 'border-blue-500/40 bg-blue-500/10 text-blue-300';
    case 'Closed':
    case 'Cleared':
      return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
    default:
      return 'border-slate-500/40 bg-slate-500/10 text-slate-300';
  }
}
