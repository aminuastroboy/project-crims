import { AppShell } from '@/components/app-shell';
import { Topbar } from '@/components/topbar';

const sections = [
  'Personal Info',
  'Physical Description',
  'Contact & Address',
  'Identification',
  'Intelligence Data',
  'Uploads'
];

export default function NewSuspectPage() {
  return (
    <AppShell>
      <Topbar title="Add New Suspect" subtitle="Capture complete bio records and initial intelligence notes." />

      <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
        <aside className="panel p-4">
          <p className="mb-4 text-sm font-semibold text-soft">Record Sections</p>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={section} className={`rounded-2xl border px-4 py-3 text-sm ${index === 0 ? 'border-brand bg-brand/10 text-white' : 'border-line bg-slate-950/40 text-slate-300'}`}>
                {index + 1}. {section}
              </div>
            ))}
          </div>
        </aside>

        <form className="panel p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="label">Full Name</label>
              <input className="input" placeholder="Enter full name" />
            </div>
            <div>
              <label className="label">Alias</label>
              <input className="input" placeholder="Known alias or nickname" />
            </div>
            <div>
              <label className="label">Gender</label>
              <select className="input"><option>Male</option><option>Female</option></select>
            </div>
            <div>
              <label className="label">Date of Birth</label>
              <input className="input" type="date" />
            </div>
            <div>
              <label className="label">Nationality</label>
              <input className="input" placeholder="Nationality" />
            </div>
            <div>
              <label className="label">Occupation</label>
              <input className="input" placeholder="Occupation" />
            </div>
            <div>
              <label className="label">Phone Number</label>
              <input className="input" placeholder="Phone number" />
            </div>
            <div>
              <label className="label">Threat Level</label>
              <select className="input"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select>
            </div>
            <div className="md:col-span-2">
              <label className="label">Current Address</label>
              <input className="input" placeholder="Current or last known address" />
            </div>
            <div className="md:col-span-2">
              <label className="label">Intelligence Notes</label>
              <textarea className="input min-h-36" placeholder="Officer remarks, patterns, known associates, or related observations" />
            </div>
            <div className="md:col-span-2">
              <label className="label">Photo / Files</label>
              <div className="rounded-2xl border border-dashed border-line bg-slate-950/40 p-8 text-center text-sm text-soft">
                Drag and drop image, ID scan, or evidence attachment here.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn-primary">Save Record</button>
            <button type="button" className="btn-secondary">Save Draft</button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
