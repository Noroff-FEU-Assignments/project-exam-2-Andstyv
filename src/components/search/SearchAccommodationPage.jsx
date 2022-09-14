import React from "react";
import { useParams } from "react-router-dom";

import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function SearchAccommodationPage() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const { data, loading, error } = useFetchData(url);

  const { id } = useParams();

  let newId = parseFloat(id);
  console.log(newId);

  let results = data;

  if (loading) {
    return <div>Loading</div>;
  }

  const searchInput = newId;
  let mainResult = [];

  function newTest() {
    console.log("hello");
    const searchFilter = results.data.filter((value) => {
      return value.id === searchInput;
    });

    const restFilter = results.data.filter((value) => {
      return value.id !== searchInput;
    });
    mainResult = searchFilter;
    results = restFilter;
    console.log(searchFilter);
  }
  newTest();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>{mainResult[0].attributes.title}</h2>
      <div>
        <h3>Other alternatives:</h3>
        {results &&
          results.map((amenity) => {
            return (
              <div key={amenity.id} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {amenity.attributes.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
