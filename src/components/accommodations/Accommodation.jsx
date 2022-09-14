import React from "react";
import { useParams } from "react-router-dom";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import EnquiryModal from "../elements/EnquiryModal";
import { StyledPageWrapper } from "../home/HomeSection";
import AccommodationImageCarousel from "./AccommodationImageCarousel";

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const accommodation = useFetchData(url);
  const item = window.localStorage.getItem("stay");
  const loc = JSON.parse(item);

  return accommodation.loading ? (
    <div id="loading">Loading</div>
  ) : (
    <StyledPageWrapper>
      <AccommodationImageCarousel key={accommodation.data.data.id} accommodationImages={accommodation.data.data.attributes.images.data} />
      <h1>{accommodation.data.data.attributes.title}</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        {accommodation.data.data.attributes.amenities.data.map((amenity) => {
          return (
            <div key={amenity.id}>
              <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "24px" }}></img>{" "}
            </div>
          );
        })}
      </div>
      {loc && (
        <>
          <div>From: {loc.fromDate}</div>
          <div>To: {loc.toDate}</div>
          <div>Days: {loc.days}</div>
          <div>Total price: {loc.days * accommodation.data.data.attributes.price}</div>
        </>
      )}
      <EnquiryModal amenity={loc} />

      <h2 style={{ alignSelf: "start", marginBottom: "5px" }}>Info:</h2>
      <p>{accommodation.data.data.attributes.description}</p>
      <p style={{ fontSize: "24px", fontWeight: "900" }}>Price per room: {accommodation.data.data.attributes.price}</p>
      <div style={{ alignSelf: "start", marginBottom: "5px" }}>
        <h3>List of Amenities:</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {accommodation.data.data.attributes.amenities.data.map((amenity) => {
            return (
              <div key={amenity.id} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                · {amenity.attributes.Amenity}
              </div>
            );
          })}
        </div>
      </div>
    </StyledPageWrapper>
  );
}

export default Accommodation;
