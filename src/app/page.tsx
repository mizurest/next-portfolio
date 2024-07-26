import { use } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollDown from "@/components/ScrollDown";
import WorkCard from "@/components/WorkCard";
import { getPortfolioList } from "@/libs/api";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const { contents } = use(getPortfolioList());
  // console.log(contents);

  return (
    <main>
      <Header />

      <section className="relative flex items-center h-screen">
        <h1 className="mx-8 text-5xl z-10 transition-all opacity-90 lg:mx-40 lg:text-6xl">
          Hi 👋
          <br />
          I&apos;m a UI designer in Japan.
        </h1>
        <p className="absolute right-4 bottom-4 font-thin text-xxs lg:text-xs opacity-35">2024.06.08 @Tokyo Bay</p>
        <ScrollDown />
        <Image src="/intro.webp" fill alt="Tokyo Bay" className="object-cover" />
      </section>

      <section>
        <div className="max-w-5xl  mx-6 lg:mx-auto py-32">
          <div className=" flex justify-between items-baseline">
            <h3 className="text-lg opacity-90">Recent Works</h3>
            <button className="text-sm font-bold text-sky-900">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 transition-all">
            {contents.slice(0, 6).map((item: Object, i: number) => {
              return <WorkCard key={contents[i].id} title={contents[i].title} tags={contents[i].tag} imageUrl={contents[i].eyecatch.url} contentId={contents[i].id} />;
            })}
          </div>
        </div>

        <div className="py-32 max-w-3xl mx-auto">
          <ProfileCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}
