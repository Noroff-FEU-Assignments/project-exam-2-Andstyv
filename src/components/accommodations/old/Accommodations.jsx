import React from "react";
import { ACCOMMODATIONS_SEARCH_URL } from "../../../constants/api";
import { useFetchData } from "../../../hooks/useFetchData";

export function Accommodations() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const { data, loading, error } = useFetchData(url);

  const accommodations = data;

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Title</h2>
      <div className="other">
        <h3>Other alternatives:</h3>
        {accommodations &&
          accommodations.data.map((amenity) => {
            return (
              <div key={amenity.id} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {amenity.attributes.title}
              </div>
            );
          })}
      </div>
      <h3>hello</h3>
    </div>
  );
}
