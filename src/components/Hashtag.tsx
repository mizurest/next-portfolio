type Props = {
  text: string
}

const Hashtag = (props: Props) => {
  const { text } = props;

  return (
    <span className="border border-white/[.08] rounded-full py-1 px-3 font-bold text-xs opacity-75 h-fit">
      #{text}
    </span>
  );
}

export default Hashtag;