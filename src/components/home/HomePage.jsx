import { Search } from "../search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import Hero from "./hero/Hero";
import HomeSection from "./HomeSection";
import Footer from "../layout/Footer";

export function HomePage() {
  // const accommodationsData = useFetchData(ACCOMMODATIONS_SEARCH_URL);
  // console.log(accommodationsData.data.data);

  const { data, loading, error } = useFetchData(ACCOMMODATIONS_SEARCH_URL);
  console.log(data.data);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <Hero />
        <div>Loading spinner</div>
        <HomeSection />
        <Footer />
      </div>
    );
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Hero />
      <Search placeholder={"Search accommodation"} data={data.data} />
      <HomeSection />
      <Footer />
    </div>
  );
}
