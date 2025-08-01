import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import styles from "@/app/layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alessia De Lisi",
  description: "Sito di Alessia De Lisi - Estetica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className={styles.layout}>
          <Header src="/logo.png" />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
