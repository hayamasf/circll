import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "サークル | circll",
  description: "サークル - circll 資源物・廃棄物関連業務の管理アプリケーション",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full bg-gray-50">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
