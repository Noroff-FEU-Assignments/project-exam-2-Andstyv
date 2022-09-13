import React from "react";
import { useParams } from "react-router-dom";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { StyledPageWrapper } from "../home/HomeSection";
import AccommodationImageCarousel from "./AccommodationImageCarousel";

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const accommodation = useFetchData(url);

  return accommodation.loading ? (
    <div id="loading">Loading</div>
  ) : (
    <StyledPageWrapper>
      <AccommodationImageCarousel key={1} accommodationImages={accommodation.data.data.attributes.images.data} />
      <h1>{accommodation.data.data.attributes.title}</h1>
      <p>{accommodation.data.data.attributes.description}</p>
      <p>Price per room: {accommodation.data.data.attributes.price}</p>
      <div>
        <h3>Amenities:</h3>
        <div>
          {accommodation.data.data.attributes.amenities.data.map((amenity) => {
            return (
              <div key={amenity.id} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "32px" }}></img>{" "}
                {amenity.attributes.Amenity}
              </div>
            );
          })}
        </div>
      </div>
    </StyledPageWrapper>
  );
}

export default Accommodation;
