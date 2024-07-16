import Image from "next/image";

const CircleAvatar = () => {
  return (
    <div className="relative w-8 h-8 rounded-full  overflow-hidden">
      <Image src="/avatar.png" alt="プロフィール画像" className="object-cover" fill />
    </div>
  );
}

export default CircleAvatar;