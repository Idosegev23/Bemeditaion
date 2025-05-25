import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: "Be Meditation | מדיטציה ופיתוח אישי",
  description: "מרכז Be Meditation - מדיטציות פעילות של אושו, סדנאות וריטריטים לפיתוח אישי ותודעה",
  keywords: "מדיטציה, אושו, ריטריט, סדנה, פיתוח אישי, תודעה, רוחניות",
  authors: [{ name: "Be Meditation" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://bemeditation.co.il",
    title: "Be Meditation | מדיטציה ופיתוח אישי",
    description: "מרכז Be Meditation - מדיטציות פעילות של אושו, סדנאות וריטריטים לפיתוח אישי ותודעה",
    siteName: "Be Meditation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
