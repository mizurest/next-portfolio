import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./../styles/globals.css";
import { lineSeedJP } from "@/fonts/fonts";

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
    <html lang="ja" className="scroll-smooth font-black dark:bg-darkgray dark:text-white">
      <body className={lineSeedJP.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
