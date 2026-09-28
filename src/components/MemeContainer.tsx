import type { Meme, MemeResponse } from "./Body";
import MemeItem from "./MemeItem";

type MemeContainerProps = {
  data: MemeResponse;
};

export default function MemeContainer({ data }: MemeContainerProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.memes.map((item: Meme, index) => (
        <MemeItem key={index} imgUrl={item.url} title={item.title} />
      ))}
    </div>
  );
}
