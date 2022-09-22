import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { AccommodationEnquiryData } from "./AccommodationEnquiryData";
import { AccommodationImageCarousel } from "./AccommodationImageCarousel";

const StyledAccommodationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledAccommodationInfoContainer = styled.div`
  max-width: 600px;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    min-width: 450px;
  }
`;

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const { data, loading, error } = useFetchData(url);

  const accommodation = data;

  const [showDesc, setShowDesc] = useState(true);
  const [showAms, setShowAms] = useState(false);
  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="acc-wrapper" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
      <StyledAccommodationContainer>
        <div>
          <AccommodationImageCarousel key={accommodation.data.id} accommodationImages={accommodation.data.attributes.images.data} />
        </div>
        <StyledAccommodationInfoContainer>
          <h1 style={{ marginTop: "9px" }}>{accommodation.data.attributes.title}</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            {accommodation.data.attributes.amenities.data.map((amenity) => {
              return (
                <div key={amenity.id}>
                  <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "16px" }}></img>{" "}
                </div>
              );
            })}
          </div>
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
            <div style={{ maxWidth: "350px" }}>
              <p style={{ fontSize: "14px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsum mollitia soluta sint sit eum architecto repellendus
                tempora ad a! Perspiciatis consequatur id, laudantium error laboriosam obcaecati vero reprehenderit autem eaque ab delectus, ratione
                at cumque. Eum dolor nemo blanditiis consectetur fuga nam quidem reprehenderit deleniti soluta reiciendis, magnam quibusdam.
              </p>
            </div>
          ) : null}
          {showAms ? (
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", maxHeight: "100px", marginTop: "14px" }}>
              {accommodation.data.attributes.amenities
                ? accommodation.data.attributes.amenities.data.map((amenity) => {
                    return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
                  })
                : ""}
            </div>
          ) : null}

          <AccommodationEnquiryData data={accommodation} />
        </StyledAccommodationInfoContainer>
      </StyledAccommodationContainer>
    </div>
  );
}

export default Accommodation;
