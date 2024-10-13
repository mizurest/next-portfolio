import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { getPortfolioList } from "@/libs/api";
import ProfileCard from "@/components/ProfileCard";
import Hashtag from "@/components/Hashtag";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Link from "next/link";

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
          <div className="py-32 max-w-5xl mx-auto">
            <ProfileCard />
            <div className="flex items-center max-w-5xl mx-6 lg:mx-auto py-32 lg:flex-row flex-col lg:gap-14 gap-8">
              <div className="flex flex-col lg:w-1/2 w-auto">
                <h3 className="text-xl opacity-90">プロフィール</h3>
                <p className="font-bold py-2 text-sm text-white/70 ">
                  FigmaとReactが好きな大学生。乗換案内のジョルダン株式会社でUIデザイナー兼コーダーとしてインターン中。主に乗換案内ではなく、鉄道会社や自治体関連の案件に関わることが多い。傍らクラウドワークにも挑戦中。
                </p>
              </div>
              <div className="flex gap-2 lg:w-1/2 w-auto flex-wrap">
                <Hashtag text="JavaScript" />
                <Hashtag text="TypeScript" />
                <Hashtag text="Python" />
                <Hashtag text="TailwindCSS" />
                <Hashtag text="Next.js" />
                <Hashtag text="UIdesign" />
                <Hashtag text="AfterEffects" />
                <Hashtag text="Figma" />
                <Hashtag text="React" />
                <Hashtag text="Vue" />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-6 lg:mx-auto py-32">
            <div className=" flex justify-between items-baseline">
              <h3 className="text-xl opacity-90">Recent works</h3>
              <Link href="/portfolio" className="text-sm font-bold text-sky-800">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 transition-all">
              {contents.slice(0, 6).map((item: Object, i: number) => {
                return <WorkCard key={contents[i].id} title={contents[i].title} tags={contents[i].tag} imageUrl={contents[i].eyecatch.url} contentId={contents[i].id} />;
              })}
            </div>
          </div>

          <div className="max-w-5xl mx-6 lg:mx-auto py-32">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
