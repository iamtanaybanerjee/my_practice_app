import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, fetchData };
}
