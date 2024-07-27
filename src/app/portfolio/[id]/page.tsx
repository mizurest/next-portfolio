"use client";
import { useParams } from 'next/navigation';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // APIから取得する予定
  const themeColor = "#625D80";

  // URLから記事のidを取得
  const params = useParams()
  console.log(params.id)

  // TODO: idを使ってAPIから記事のデータを取得する

  return (
    <>
      <Header themeColor={themeColor} />
      <main style={{ backgroundColor: themeColor }}>
        <section className="relative flex items-center h-screen">
          <div className="mx-8 lg:mx-40 ">
            <h3 className="text-3xl z-10 transition-all opacity-90 lg:text-4xl">テキストテキストテキストテキスト</h3>
            <div className="font-bold opacity-60 mt-5 flex gap-2 lg:gap-3 text-sm lg:text-base">
              <span>2023</span>
              <span>・</span>
              <span>Motion Graphic</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
