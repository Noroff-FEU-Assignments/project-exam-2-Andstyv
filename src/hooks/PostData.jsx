// import axios from "axios";
// import { useEffect, useState } from "react";

// export const PostData = (url, payload) => {
//   const [postData, setPostData] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axios.post(url, payload);
//         setPostData(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(true);
//       }
//     })();
//     //eslint-disable-next-line
//   }, []);
//   return { postData, error, loading };
// };
