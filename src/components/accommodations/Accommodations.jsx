import React from "react";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function Accommodations() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const accommodations = useFetchData(url);

  return (
    <div>
      <h2>{accommodations && accommodations.data.data[3].attributes.title}</h2>
      <div>
        <h3>Other alternatives:</h3>
        {accommodations &&
          accommodations.data.data.map((amenity) => {
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
