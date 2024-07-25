import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const lineSeedJP = localFont({
  src: [
    {
      path: "../fonts/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Eb.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

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
      <body className={lineSeedJP.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
