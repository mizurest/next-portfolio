import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: '../fonts/LINESeedJP_OTF_Eb.woff2' })

export const metadata: Metadata = {
  title: "Kosuke Koizumi",
  description: "ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
