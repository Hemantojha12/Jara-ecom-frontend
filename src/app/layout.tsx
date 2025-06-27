// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/components/common/CustomLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jara - Luxury Shopping Experience',
  description: 'Experience the finest in luxury shopping with premium services and exclusive offerings.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}