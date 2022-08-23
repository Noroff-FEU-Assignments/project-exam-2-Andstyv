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
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get(url);
        console.log(resp.data);
        setProducts(resp.data);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        console.log("loading finished");
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  console.log(products.data);
  console.log(error.message);
  return { products, error, loading };
}
