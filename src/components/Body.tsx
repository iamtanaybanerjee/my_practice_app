import { useState, useEffect } from "react";

export default function Body() {
  //const { memeList, setMemeList } = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://meme-api.com/gimme/5");
    const data = await response.json();
    console.log(data);
  };

  return <></>;
}
