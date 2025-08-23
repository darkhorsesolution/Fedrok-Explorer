'use client';

import { Footer } from '@/components';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
