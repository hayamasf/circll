import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "circll | サークル",
  description: "circll-サークル アプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full bg-white">
      <body className={inter.className + "h-full"}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
