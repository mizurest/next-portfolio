import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkCard from "@/components/WorkCard";
import { getPortfolioList } from "@/libs/api";

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

export default async function Portfolio() {
  const { contents } = await getPortfolioList();
  contents.sort((a: Item, b: Item) => new Date(b.created).getTime() - new Date(a.created).getTime());


  return (
    <>
      <Header themeColor="#202020" />
      <main>
        <div className="py-32 px-6 max-w-5xl mx-auto">
          <h2 className="pt-24 text-4xl lg:text-5xl opacity-90">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 transition-all">
              {contents.slice(0, 6).map((item: Object, i: number) => {
                return <WorkCard key={contents[i].id} title={contents[i].title} tags={contents[i].tag} imageUrl={contents[i].eyecatch.url} contentId={contents[i].id} />;
              })}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
