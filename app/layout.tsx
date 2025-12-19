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
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white px-6 py-4">
          <h1 className="text-lg font-semibold">Mixo Ads</h1>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
