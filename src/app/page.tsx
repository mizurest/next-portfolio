import { use } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { getPortfolioList } from "@/libs/api";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import Head from "next/head";

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

interface Item {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  eyecatch: Eyecatch;
  title: string;
  tag: string;
  content: string;
  category: Category | null;
  themeColor: string;
  created: string;
}

export default async function Home() {
  const { contents } = await getPortfolioList();
  contents.sort((a: Item, b: Item) => new Date(b.created).getTime() - new Date(a.created).getTime());

  return (
    <>
      <Header themeColor="#202020" />
      <main>
        <Hero />
        <section>
          <div className="max-w-5xl mx-6 lg:mx-auto py-36">
            <div className=" flex justify-between items-baseline">
              <h3 className="text-lg opacity-90">Recent Works</h3>
              <button className="text-sm font-bold text-sky-800">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 transition-all">
              {contents.slice(0, 6).map((item: Object, i: number) => {
                return <WorkCard key={contents[i].id} title={contents[i].title} tags={contents[i].tag} imageUrl={contents[i].eyecatch.url} contentId={contents[i].id} />;
              })}
            </div>
          </div>

          <div className="py-36 max-w-3xl mx-auto">
            <ProfileCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
