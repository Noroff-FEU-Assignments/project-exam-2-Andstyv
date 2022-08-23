import axios from "axios";
import { useEffect, useState } from "react";

// export async function tryToFetchDataOld(url) {
//   let res = await axios.get(url);
//   let data = res.data
//     .then((response) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log("An error occured:", error.response);
//     });
// }

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
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, error, loading };
}
