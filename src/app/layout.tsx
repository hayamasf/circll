import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils"
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navigation from "@/components/Navigation";

import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "サークル | circll",
  description: "サークル - circll 資源物・廃棄物関連業務の管理アプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    // <html lang="ja" className="h-full">
    <html lang="ja">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <UserProvider>
          <div>
            <Navigation />
            <div className="lg:pl-72">
              <main className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
