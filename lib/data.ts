export type Suspect = {
  id: string;
  code: string;
  fullName: string;
  alias: string;
  gender: string;
  age: number;
  nationality: string;
  location: string;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Wanted' | 'Watchlist' | 'Detained' | 'Cleared';
  updatedAt: string;
  image: string;
  occupation: string;
  phone: string;
  address: string;
  notes: string;
  caseIds: string[];
};

export type CaseItem = {
  id: string;
  title: string;
  type: string;
  status: 'Open' | 'Under Review' | 'Closed' | 'In Court';
  priority: 'Low' | 'Medium' | 'High';
  officer: string;
  location: string;
  incidentDate: string;
  summary: string;
};

export const suspects: Suspect[] = [
  {
    id: '1',
    code: 'CRM-0001',
    fullName: 'Sani Musa Bello',
    alias: 'Red Falcon',
    gender: 'Male',
    age: 34,
    nationality: 'Nigerian',
    location: 'Abuja Municipal',
    risk: 'Critical',
    status: 'Wanted',
    updatedAt: '2026-04-11 20:40',
    image: 'SM',
    occupation: 'Trader',
    phone: '+234 803 000 1122',
    address: 'Kubwa, Abuja',
    notes: 'Linked to organized robbery pattern across transport corridors. Travels with two known associates.',
    caseIds: ['CASE-021', 'CASE-018']
  },
  {
    id: '2',
    code: 'CRM-0002',
    fullName: 'Maryam Ibrahim Yusuf',
    alias: 'M.I.Y.',
    gender: 'Female',
    age: 29,
    nationality: 'Nigerian',
    location: 'Yola North',
    risk: 'High',
    status: 'Watchlist',
    updatedAt: '2026-04-10 09:15',
    image: 'MY',
    occupation: 'Business Owner',
    phone: '+234 809 111 3366',
    address: 'Dougirei, Yola',
    notes: 'Flagged in multiple financial intelligence notes and linked device metadata.',
    caseIds: ['CASE-019']
  },
  {
    id: '3',
    code: 'CRM-0003',
    fullName: 'Haruna Adamu',
    alias: 'Engineer',
    gender: 'Male',
    age: 41,
    nationality: 'Nigerian',
    location: 'Kaduna South',
    risk: 'Medium',
    status: 'Detained',
    updatedAt: '2026-04-09 16:00',
    image: 'HA',
    occupation: 'Mechanic',
    phone: '+234 816 208 9911',
    address: 'Barnawa, Kaduna',
    notes: 'In custody pending evidence review and witness confirmation.',
    caseIds: ['CASE-015']
  },
  {
    id: '4',
    code: 'CRM-0004',
    fullName: 'Amina Kabiru',
    alias: 'North Star',
    gender: 'Female',
    age: 32,
    nationality: 'Nigerian',
    location: 'Mubi',
    risk: 'Low',
    status: 'Cleared',
    updatedAt: '2026-04-08 12:31',
    image: 'AK',
    occupation: 'Consultant',
    phone: '+234 801 224 7721',
    address: 'Sabon Layi, Mubi',
    notes: 'Profile retained for historical intelligence and archive references.',
    caseIds: []
  }
];

export const cases: CaseItem[] = [
  {
    id: 'CASE-021',
    title: 'Highway Interception Ring',
    type: 'Armed Robbery',
    status: 'Open',
    priority: 'High',
    officer: 'DSP Ibrahim Saleh',
    location: 'Abuja-Kaduna Road',
    incidentDate: '2026-04-02',
    summary: 'Coordinated robbery pattern with vehicle tracking suppression and late-night targeting.'
  },
  {
    id: 'CASE-019',
    title: 'Structured Fraud Transfers',
    type: 'Financial Crime',
    status: 'Under Review',
    priority: 'High',
    officer: 'Inspector Zainab Musa',
    location: 'Yola',
    incidentDate: '2026-03-29',
    summary: 'Suspicious transfers tied to shell accounts, SIM rotation, and falsified identity documents.'
  },
  {
    id: 'CASE-018',
    title: 'Warehouse Break-In',
    type: 'Burglary',
    status: 'In Court',
    priority: 'Medium',
    officer: 'ASP Daniel Peter',
    location: 'Gwagwalada',
    incidentDate: '2026-03-10',
    summary: 'Evidence points to repeat entry route and insider logistics support.'
  },
  {
    id: 'CASE-015',
    title: 'Illegal Arms Recovery',
    type: 'Weapons Offense',
    status: 'Closed',
    priority: 'High',
    officer: 'SP Kabiru Ali',
    location: 'Kaduna South',
    incidentDate: '2026-02-18',
    summary: 'Recovered prohibited weapons and communication devices during targeted raid.'
  }
];

export const activityFeed = [
  'New suspect record created for Maryam Ibrahim Yusuf.',
  'CASE-021 updated with new surveillance note.',
  'Officer role assigned to Inspector Zainab Musa.',
  'Evidence upload completed for CASE-018.',
  'Wanted notice revalidated for Sani Musa Bello.'
];

export const metrics = [
  { label: 'Total Suspects', value: '1,284', change: '+12%' },
  { label: 'Active Cases', value: '247', change: '+4%' },
  { label: 'Wanted Persons', value: '38', change: '+2%' },
  { label: 'High Risk Alerts', value: '19', change: '+8%' }
];

export const users = [
  { name: 'Aisha Bello', role: 'Super Admin', unit: 'HQ Operations', status: 'Active' },
  { name: 'DSP Ibrahim Saleh', role: 'Investigator', unit: 'Special Crimes', status: 'Active' },
  { name: 'Zainab Musa', role: 'Analyst', unit: 'FIU Desk', status: 'Active' },
  { name: 'Musa Hamisu', role: 'Records Officer', unit: 'Central Registry', status: 'Inactive' }
];
