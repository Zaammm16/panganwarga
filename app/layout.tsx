import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta', // PENTING: Nama variabel ini dipanggil di CSS tadi
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pangan Warga Nusantara",
  description: "Indonesian Food Export",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-cream text-gray-900`}>
        {children}
      </body>
    </html>
  );
}