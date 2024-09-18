import type { Metadata } from 'next';

import './globals.css';
import {Toaster} from "sonner";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body >
        <Toaster position='bottom-right'/>
        {children}
        </body>
    </html>
  );
}
