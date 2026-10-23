import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'NPtodo AI', description: 'Plan your day with an AI-powered task manager.', manifest: '/manifest.json' };
export const viewport: Viewport = { themeColor: '#090b12', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
