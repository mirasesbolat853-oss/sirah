import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ServiceWorkerRegistration from "./ServiceWorkerRegistration";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sira",
  description: "История жизни Пророка Мухаммада ﷺ",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sira",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
        <ServiceWorkerRegistration />
        <Analytics />
      </body>
    </html>
  );
}