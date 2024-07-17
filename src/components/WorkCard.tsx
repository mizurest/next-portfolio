import Image from "next/image";

type Props = {
  title: string;
  tags: string;
};

const WorkCard = (props: Props) => {
  const { title, tags } = props;
  return (
    <div>
      <div className="relative bg-neutral-900 h-48 rounded-3xl overflow-hidden">
        <Image src="/sample-thumnail.png" alt="portfolio thumnail" className="object-cover" fill  />
      </div>
      <div className="mt-4">
        <h4 className="opacity-90">{title}</h4>
        <p className="font-bold text-xs opacity-50 mt-0.5">{tags}</p>
      </div>
    </div>
  );
};

export default WorkCard;
