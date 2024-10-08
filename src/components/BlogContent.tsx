"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hexToRgb } from "@/libs/color";

interface BlogPost {
  id: string;
  title: string;
  created: string;
  tag: string;
  content: string;
  themeColor: string;
  eyecatch: {
    url: string;
  };
}

interface BlogContentProps {
  data: BlogPost;
}

export default function BlogContent({ data }: BlogContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const date = new Date(data.created);
  const year = date.getUTCFullYear();

  let rgb = "32,32,32";
  let themeHex = "#202020";

  if (data.themeColor !== "-") {
    themeHex = data.themeColor;
    rgb = hexToRgb(data.themeColor);
  }

  return (
    <>
      <title>{`${data.title}`}</title>

      <Header themeColor={themeHex} />
      <main style={{  }}>
        <section className="relative flex items-center h-screen overflow-hidden">
          <Image src={data.eyecatch.url} fill alt="eyecatch" className="object-cover" />
          <div
            className="h-full w-full absolute backdrop-blur-md"
            style={{
              background: `linear-gradient(180deg, rgba(${rgb},1) 0%, rgba(${rgb},0.85) 50%, rgba(${rgb},1) 100%)`,
            }}
          ></div>
          <div className="mx-8 lg:mx-40">
            <h3 className="text-3xl z-10 transition-all opacity-90 lg:text-4xl">{data.title}</h3>
            <div className="font-bold opacity-60 mt-4 flex gap-2 lg:gap-3 text-sm lg:text-base">
              <span>{`${year}`}</span>
              <span>/</span>
              <span>{data.tag}</span>
            </div>
          </div>
        </section>

        <section className="text-sm lg:text-base font-thin leading-10 lg:leading-7">
          <div className="portfolio-content lg:w-1/2 mx-6 lg:mx-auto py-40" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </section>
      </main>
      <Footer />
    </>
  );
}