import { Search } from "../search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import Hero from "./hero/Hero";
import HomeSection from "./HomeSection";
import Footer from "../layout/Footer";

export function HomePage() {
  const accommodationsData = useFetchData(ACCOMMODATIONS_SEARCH_URL);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Hero />
      <Search placeholder={"Search accommodation"} data={accommodationsData.data.data} />
      <HomeSection />
      <Footer />
    </div>
  );
}
