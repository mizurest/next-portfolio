import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

const CircleAvatar = (props: Props) => {
  const { width, height } = props;
  return (
    <div className={`relative rounded-full overflow-hidden shrink-0`} style={{width: width, height: height}}>
      <Image src="/avatar.png" alt="プロフィール画像" className="object-cover" fill />
    </div>
  );
};

export default CircleAvatar;
