import { useFetchData } from "../../hooks/useFetchData";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { SkeletonSearch } from "../../components/search/SkeletonSearch";
import { Search } from "../../components/search/Search";
import { Hero } from "../../components/home/hero/Hero";
import { HomeSection } from "../../components/home/HomeSection";

export function HomePage() {
  const { data, loading, error } = useFetchData(ACCOMMODATIONS_SEARCH_URL);

  if (loading) {
    return (
      <>
        <Hero />
        <SkeletonSearch loading={loading} />
        <HomeSection />
      </>
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
