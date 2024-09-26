import type { Metadata } from 'next';

import './globals.css';
import { Toaster } from 'sonner';
import SessionWrapper from '@/components/SessionWrapper';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <Toaster position="bottom-right" />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
