import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valenzia Intelligent Solutions",
  description: "Enterprise systems, automation and operational intelligence.",
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