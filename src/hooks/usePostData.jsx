// import axios from "axios";
// import { useEffect, useState } from "react";

// export const usePostData = (url, payload) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axios.post(url, payload);
//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(true);
//       }
//     })();
//   }, []);
//   return { data, error, loading };
// };
