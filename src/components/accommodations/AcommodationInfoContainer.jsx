import { useState } from "react";
import { AccommodationAmenities } from "./AccommodationAmenities";
import { AccommodationAmenitiesIcons } from "./AccommodationAmenitiesIcons";
import { AccommodationEnquiryData } from "./AccommodationEnquiryData";
import { StyledAccommodationInfoContainer } from "./accommodationInfoContainer.styles";

export function AccommodationInfoContainer({ accommodation }) {
  const [showDesc, setShowDesc] = useState(true);
  const [showAms, setShowAms] = useState(false);
  const amenityData = accommodation.data;

  return (
    <StyledAccommodationInfoContainer>
      <h1>{accommodation.data.attributes.title}</h1>
      <AccommodationAmenitiesIcons accommodation={amenityData} />
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          onClick={() => {
            setShowDesc(true);
            setShowAms(false);
          }}
          style={showDesc ? { borderBottom: "3px solid black" } : { border: "none", cursor: "pointer" }}
        >
          <h2>Description</h2>
        </div>
        <div
          onClick={() => {
            setShowDesc(false);
            setShowAms(true);
          }}
          style={showAms ? { borderBottom: "3px solid black" } : { border: "none", cursor: "pointer" }}
        >
          <h2>Amenities</h2>
        </div>
      </div>
      {showDesc ? (
        <div style={{ width: "100%" }}>
          <p>{accommodation.data.attributes.description}</p>
        </div>
      ) : null}
      {showAms ? <AccommodationAmenities accommodation={accommodation} /> : null}
      <AccommodationEnquiryData data={accommodation} />
    </StyledAccommodationInfoContainer>
  );
}
