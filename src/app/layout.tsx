import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayurveda Mahlapaast | Personaliseeritud Dosha-põhised Mahlad",
  description: "Eesti esimene autentne Ayurveda mahlapaastu bränd. Kohalikud mahekoostisosad + India vürtsid. Vata, Pitta, Kapha programmid. Tallinn.",
  keywords: "mahlapaast, ayurveda, dosha, vata, pitta, kapha, detox, mahlad, Tallinn, Eesti, mahe, külmpressitud",
  openGraph: {
    title: "Ayurveda Mahlapaast | Personaliseeritud Dosha-põhised Mahlad",
    description: "Eesti esimene autentne Ayurveda mahlapaastu bränd. Kohalikud mahekoostisosad + India vürtsid.",
    locale: "et_EE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
