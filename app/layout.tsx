import type { Metadata } from "next";
import { Inter } from "next/font/google";
// styles/fonts.js

import "./globals.css";
import NavBar from "./components/NavBar";
import { averageSans, spaceMono } from "./styles/fonts";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Saadia's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} ${spaceMono.variable} ${averageSans.variable}`}><NavBar />{children}<Footer/></body>
    </html>
  );
}
