import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useFetch = (url, method, payload) => {
  const [data, setData] = useState([]);
  const [isLoading, handleLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const request = await axios({
        url: url,
        method: method,
        data: payload,
      });
      const response = await request.data;
      setData(response);
      handleLoading(false);
    } catch (err) {
      console.log(err);
      handleLoading(false);
    }
  }, [url, method, payload]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [data, isLoading];
};
