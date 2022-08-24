// import axios from "axios";
// import { useEffect, useState } from "react";

// export function PostMessage(formData) {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const resp = await axios({
//           method: "post",
//           url: "https://andsty-noroff-exam2.herokuapp.com/api/contact-form-messages",
//           data: formData,
//           headers: { "Content-Type": "application/json" },
//         });
//         console.log(resp);
//       } catch (err) {
//         setError(err);
//       } finally {
//         console.log("loading finished");
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [formData]);
//   return { error, loading };
// }
