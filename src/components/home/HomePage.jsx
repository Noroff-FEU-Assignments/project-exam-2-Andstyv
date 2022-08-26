import { Search } from "../search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_UTL } from "../../constants/api";

export function HomePage() {
  const accommodationsData = useFetchData(ACCOMMODATIONS_SEARCH_UTL);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <Search placeholder={"Search accommodation"} data={accommodationsData.data.data} />
    </div>
  );
}
