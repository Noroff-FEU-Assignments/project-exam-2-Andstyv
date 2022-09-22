import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get(url);
        setData(resp.data);
      } catch (err) {
        setError(err);
      } finally {
        console.log("loading finished");
        setTimeout(() => {
          setLoading(false);
        }, "5000");
      }
    }
    fetchData();
  }, [url]);
  return { data, error, loading };
}
