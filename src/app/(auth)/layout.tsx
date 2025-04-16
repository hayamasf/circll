import "../globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}>
        {children}
      </body>
    </html>
  )
}
