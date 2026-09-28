import useFetch from "../hooks/useFetch";
import MemeContainer from "./MemeContainer";
import MemeItem from "./MemeItem";
import ShimmerContainer from "./ShimmerContainer";

export type Meme = {
  url: string;
  title: string;
};

export type MemeResponse = {
  count: number;
  memes: Meme[];
};

export default function Body() {
  const data = useFetch<MemeResponse>("https://meme-api.com/gimme/20");
  console.log(data);

  return <>{!data ? <ShimmerContainer /> : <MemeContainer data={data} />}</>;
}
