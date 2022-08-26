import React from "react";
import { useParams } from "react-router-dom";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=%2A";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const accommodation = useFetchData(url);

  return accommodation.loading ? (
    <div>Loading</div>
  ) : (
    <>
      <h1>{accommodation.data.data.attributes.title}</h1>
      <h2>ID: {accommodation.data.data.id}</h2>
      <p>{accommodation.data.data.attributes.description}</p>
      <p>Price per room: {accommodation.data.data.attributes.price}</p>
      <div>
        <h3>Amenities:</h3>
        <div>
          {accommodation.data.data.attributes.amenities.data.map((amenity) => {
            return <div key={amenity.id}>{amenity.attributes.Amenity}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Accommodation;
