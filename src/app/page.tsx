import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      
      <div className="relative flex items-center h-screen">
        <h1 className="mx-8 text-5xl z-10 transition-all lg:mx-40 lg:text-6xl ">
          Hi 👋
          <br />
          I'm a UI designer in Japan.
        </h1>
        <Image src="/intro.png" fill alt="東京湾の写真" className="object-cover" />
      </div>
      <div className="h-96">
        Works
      </div>
      <div className="h-96">
        Profile
      </div>

      <Footer />
    </main>
  );
}
