import { Search } from "../search/Search";

import { useFetchData } from "../../hooks/useFetchData";

export function HomePage() {
  const url = "https://andsty-noroff-exam2.herokuapp.com/api/products";
  const bookData = useFetchData(url);
  console.log(bookData.data.data);

  return (
    <>
      <h1>Home</h1>
      <Search placeholder={"Search accommodation"} data={bookData.data.data} />
    </>
  );
}
