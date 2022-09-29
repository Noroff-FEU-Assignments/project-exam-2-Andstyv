import PropTypes from "prop-types";
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
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, error, loading };
}

useFetchData.propTypes = {
  url: PropTypes.string.isRequired,
};
