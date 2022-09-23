import { Search } from "../search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import Hero from "./hero/Hero";
import HomeSection from "./HomeSection";
import { SkeletonSearch } from "../search/SkeletonSearch";

export function HomePage() {
  const { data, loading, error } = useFetchData(ACCOMMODATIONS_SEARCH_URL);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <Hero />
        <SkeletonSearch loading={loading} />
        <HomeSection />
      </div>
    );
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  return (
    <>
      <Hero />
      <Search placeholder={"Search accommodation"} data={data.data} loading={loading} />
      <HomeSection />
    </>
  );
}
