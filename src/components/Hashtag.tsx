type Props = {
  text: string
}

const Hashtag = (props: Props) => {
  const { text } = props;

  return (
    <span className="border border-white/[.08] rounded-full py-1 px-4 font-bold text-sm opacity-75 h-fit">
      #{text}
    </span>
  );
}

export default Hashtag;