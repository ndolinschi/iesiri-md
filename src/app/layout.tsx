import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ieșiri MD — Idei de weekend în Chișinău",
  description:
    "Curated weekend outing ideas in Chișinău, Moldova. Parcuri, muzee, cafenele de suflet și plimbări autentice fără clișee.",
  keywords: [
    "Chisinau",
    "Moldova",
    "iesiri weekend",
    "parcuri chisinau",
    "cafenele chisinau",
    "ce facem in weekend",
    "valea morilor",
    "dendrariu",
  ],
  authors: [{ name: "Ieșiri MD" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary`}
      >
        <Header />
        <main className="flex-1 pb-24 md:pb-12 pt-4 md:pt-6">{children}</main>
        <BottomNav />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
