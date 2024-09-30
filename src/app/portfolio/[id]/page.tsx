import BlogContent from "@/components/BlogContent";
import { getPortfolioList } from "@/libs/api";

interface Params {
  id: string;
}

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

export default async function BlogPage({ params }: { params: Params }) {
  const { id } = params; // URLからidを取得

  // APIからデータを取得
  const { contents } = await getPortfolioList();
  const data = contents.find((item: BlogPost) => item.id === id);

  if (!data) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return <BlogContent data={data} />;
}
