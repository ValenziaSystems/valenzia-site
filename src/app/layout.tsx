import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Valenzia Intelligent Solutions",
  description:
    "Enterprise systems, automation and operational intelligence.",
  keywords: [
    "enterprise automation",
    "ERP integrations",
    "operational intelligence",
    "whatsapp api",
    "business systems",
  ],
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