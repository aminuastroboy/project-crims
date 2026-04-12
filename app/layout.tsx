import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRIMS Frontend',
  description: 'Crime Intelligence Management System frontend mockup'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
