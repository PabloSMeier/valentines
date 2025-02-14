/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const great_Vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Camila Campillo",
  description: "Camila Campillo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/heart.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
