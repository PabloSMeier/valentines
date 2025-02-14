import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
