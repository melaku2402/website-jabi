

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jabi Cooperatives Union",
  description: "Empower Your Financial Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-slate-50 text-slate-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}