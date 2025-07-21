// components/common/CustomLayout.tsx
'use client'

// import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}