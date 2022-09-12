import React from "react";
import { useParams } from "react-router-dom";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { StyledPageWrapper } from "../home/HomeSection";
import AccommodationImageCarousel from "./AccommodationImageCarousel";

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate=%2A";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const accommodation = useFetchData(url);

  // const placeHolderImgs = [
  //   { url: "https://loremflickr.com/g/320/240/hotel" },
  //   { url: "https://loremflickr.com/g/320/240/paris" },
  //   { url: "https://loremflickr.com/g/320/240/london" },
  //   { url: "https://loremflickr.com/g/320/240/dog" },
  //   { url: "https://loremflickr.com/g/320/240/cat" },
  // ];

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
            return <div key={amenity.id}>{amenity.attributes.Amenity}</div>;
          })}
        </div>
      </div>
    </StyledPageWrapper>
  );
}

export default Accommodation;
