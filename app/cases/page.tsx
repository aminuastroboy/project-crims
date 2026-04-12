const cases = [
  { id: "CASE-1119", title: "Cross-Border Trafficking Ring", status: "Active", officer: "DSP Aliyu Musa" },
  { id: "CASE-1105", title: "Financial Pattern Review", status: "Under Review", officer: "Inspector Rahila Bello" },
  { id: "CASE-1088", title: "Illegal Arms Distribution", status: "Active", officer: "ASP Ibrahim Ahmed" },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#060b16] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Case Files</h1>
          <p className="mt-2 text-sm text-slate-400">Track linked investigations and case summaries.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.id}</p>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-400">Status: {item.status}</p>
              <p className="mt-1 text-sm text-slate-400">Assigned Officer: {item.officer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
