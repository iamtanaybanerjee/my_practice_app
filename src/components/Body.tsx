import { useEffect, useState } from "react";
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
  const [memes, setMemes] = useState<Meme[]>([]);

  const { data, fetchData } = useFetch<MemeResponse>(
    "https://meme-api.com/gimme/20",
  );

  useEffect(() => {
    if (data) {
      setMemes((prev) => [...prev, ...data?.memes]);
    }
  }, [data]);

  useEffect(() => {
    //add scroll event
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchData("https://meme-api.com/gimme/20");
    }
  };

  return (
    <>
      {memes.length === 0 ? (
        <ShimmerContainer />
      ) : (
        <MemeContainer data={{ count: memes.length, memes }} />
      )}
    </>
  );
}
