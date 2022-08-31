import { Search } from "../search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import Hero from "./hero/Hero";

export function HomePage() {
  const accommodationsData = useFetchData(ACCOMMODATIONS_SEARCH_URL);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Hero />
      <Search placeholder={"Search accommodation"} data={accommodationsData.data.data} />
    </div>
  );
}
