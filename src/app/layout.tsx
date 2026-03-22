import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Focus Zone',
  description: 'Focus on you tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-red-400 font-sans">{children}</body>
    </html>
  );
}
