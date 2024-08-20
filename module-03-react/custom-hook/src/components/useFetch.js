import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, handleLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const request = await axios.get(url);
        const response = await request.data;
        setData(response);
        handleLoading(false);
      } catch {
        handleLoading(false);
      }
    };
    fetcher();
  }, [url]);

  return [data, isLoading];
};
