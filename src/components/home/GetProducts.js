import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";

function GetProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "/products";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          const results = json.data;
          setProducts(results);
        } else {
          setError("An error occured. Please try again");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [url]);
  console.log(products);

  return (
    <>
      <div>
        {products.map((product) => {
          return <div key={product.id}>{product.attributes.name}</div>;
        })}
      </div>
    </>
  );
}

export default GetProducts;
