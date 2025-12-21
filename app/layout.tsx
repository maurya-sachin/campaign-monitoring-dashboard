import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mixo Ads Dashboard",
  description: "Campaign monitoring dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <header className="border-b bg-white dark:bg-slate-900 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <h1 className="text-lg font-semibold tracking-tight">Mixo Ads</h1>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
