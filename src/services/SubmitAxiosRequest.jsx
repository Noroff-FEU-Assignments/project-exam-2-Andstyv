import axios from "axios";
import { useEffect, useState } from "react";

export function SubmitAxiosRequest(formData, url, e) {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/enquiries?populate[accommodation]=*",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        setMessage("Enquiry sent successfully");
      })
      .catch(function (response) {
        setMessage(response.message);
      });
    e.target.reset();
    setSubmitting(false);
    //eslint-disable-next-line
  }, [url]);

  return { message, submitting };
}

// export function useFetchData(url) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const resp = await axios.get(url);
//         setData(resp.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         console.log("loading finished");
//         setTimeout(() => {
//           setLoading(false);
//         }, "2000");
//       }
//     }
//     fetchData();
//   }, [url]);
//   return { data, error, loading };
// }
