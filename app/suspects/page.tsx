const suspects = [
  { id: "CRM-0001", name: "Usman Ibrahim", alias: "Small Doctor", risk: "High", status: "Wanted", location: "Yola North" },
  { id: "CRM-0002", name: "Amina Yusuf", alias: "Madam Zee", risk: "Medium", status: "Watchlist", location: "Jimeta" },
  { id: "CRM-0003", name: "Haruna Lawal", alias: "Captain", risk: "Critical", status: "Wanted", location: "Mubi South" },
];

export default function SuspectsPage() {
  return (
    <main className="min-h-screen bg-[#060b16] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Suspect Records</h1>
          <p className="mt-2 text-sm text-slate-400">Manage and maintain full bio records for suspects.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-6 gap-4 border-b border-white/10 px-5 py-4 text-sm text-slate-400">
            <span>ID</span>
            <span>Name</span>
            <span>Alias</span>
            <span>Risk</span>
            <span>Status</span>
            <span>Location</span>
          </div>
          {suspects.map((suspect) => (
            <div key={suspect.id} className="grid grid-cols-6 gap-4 border-b border-white/10 px-5 py-4 text-sm last:border-b-0">
              <span>{suspect.id}</span>
              <span>{suspect.name}</span>
              <span>{suspect.alias}</span>
              <span>{suspect.risk}</span>
              <span>{suspect.status}</span>
              <span>{suspect.location}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
