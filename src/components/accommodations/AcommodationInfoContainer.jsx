import { useState } from "react";
import { AccommodationAmenities } from "./AccommodationAmenities";
import { AccommodationAmenitiesIcons } from "./AccommodationAmenitiesIcons";
import { AccommodationEnquiryData } from "./AccommodationEnquiryData";
import styled from "styled-components";

const StyledAccommodationInfoContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  min-height: 450px;

  h2 {
    margin-bottom: 5px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    min-width: 400px;
    width: 40%;
  }
`;

export function AccommodationInfoContainer({ accommodation }) {
  const [showDesc, setShowDesc] = useState(true);
  const [showAms, setShowAms] = useState(false);
  const amenityData = accommodation.data;

  return (
    <StyledAccommodationInfoContainer>
      <h1 style={{ marginTop: "9px" }}>{accommodation.data.attributes.title}</h1>
      <AccommodationAmenitiesIcons accommodation={amenityData} />
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          onClick={() => {
            setShowDesc(true);
            setShowAms(false);
          }}
          style={showDesc ? { borderBottom: "3px solid black" } : { border: "none" }}
        >
          <h2>Description</h2>
        </div>
        <div
          onClick={() => {
            setShowDesc(false);
            setShowAms(true);
          }}
          style={showAms ? { borderBottom: "3px solid black" } : { border: "none" }}
        >
          <h2>Amenities</h2>
        </div>
      </div>
      {showDesc ? (
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsum mollitia soluta sint sit eum architecto repellendus tempora ad
            a! Perspiciatis consequatur id, laudantium error laboriosam obcaecati vero reprehenderit autem eaque ab delectus, ratione at cumque. Eum
            dolor nemo blanditiis consectetur fuga nam quidem reprehenderit deleniti soluta reiciendis, magnam quibusdam.
          </p>
        </div>
      ) : null}
      {showAms ? <AccommodationAmenities accommodation={accommodation} /> : null}
      <AccommodationEnquiryData data={accommodation} />
    </StyledAccommodationInfoContainer>
  );
}
