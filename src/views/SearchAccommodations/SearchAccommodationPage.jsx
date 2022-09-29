import { useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { SkeletonSearchAccommodations } from "./SkeletonSearchAccommodations";
import { MainAccommodations } from "../../components/accommodations/MainAccommodations";
import { AlternativeAccommodations } from "../../components/accommodations/AlternativeAccommodations";
import { dateConverter } from "../../components/utils/converters/dateConverter";
import { ErrorComponent } from "../../components/layout/error/ErrorComponent";

export function SearchAccommodationPage() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const { data, loading, error } = useFetchData(url);
  const { id } = useParams();

  const parsedId = parseFloat(id);
  const searchInput = parsedId;
  let results = data;
  let mainResult = [];

  if (loading) {
    return <SkeletonSearchAccommodations />;
  }
  const item = window.localStorage.getItem("stay");
  const accommodationData = JSON.parse(item);
  let { parsedCheckIn, parsedCheckOut, rooms } = dateConverter(accommodationData);

  function filterAccommodations() {
    const searchFilter = results.data.filter((value) => {
      return value.id === searchInput;
    });

    const filteredRemainingResults = results.data.filter((value) => {
      return value.id !== searchInput;
    });
    mainResult = searchFilter;
    results = filteredRemainingResults;
  }
  filterAccommodations();

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="search-acc-wrap" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
      <MainAccommodations
        accommodation={mainResult[0]}
        parsedCheckIn={parsedCheckIn}
        parsedCheckOut={parsedCheckOut}
        rooms={rooms}
        accommodationData={accommodationData}
      />
      <AlternativeAccommodations results={results} rooms={rooms} accommodationData={accommodationData} />
    </div>
  );
}
