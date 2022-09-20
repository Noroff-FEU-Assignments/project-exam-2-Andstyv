import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { StyledPageWrapper } from "../home/HomeSection";
import { AccommodationEnquiryData } from "./AccommodationEnquiryData";
import AccommodationImageCarousel from "./AccommodationImageCarousel";

function Accommodation() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const accommodation = useFetchData(url);

  return accommodation.loading ? (
    <div id="loading">Loading</div>
  ) : (
    <StyledPageWrapper style={{ marginTop: "20px" }}>
      <AccommodationImageCarousel key={accommodation.data.data.id} accommodationImages={accommodation.data.data.attributes.images.data} />
      <h1 style={{ alignSelf: "start", marginBottom: "5px" }}>{accommodation.data.data.attributes.title}</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flexWrap: "wrap", alignSelf: "start" }}>
        {accommodation.data.data.attributes.amenities.data.map((amenity) => {
          return (
            <div key={amenity.id}>
              <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "24px" }}></img>{" "}
            </div>
          );
        })}
      </div>
      <NavLink to="enquiries">Enquiries</NavLink>
      <NavLink to="create">Create new accommodation</NavLink>
      <Outlet />
      <div style={{ display: "flex", alignSelf: "flex-start", gap: "20px" }}>
        <h2 style={{ alignSelf: "start", marginBottom: "5px" }}>Description</h2>
        <h2 style={{ alignSelf: "start", marginBottom: "5px" }}>Amenities</h2>
      </div>
      <p style={{ fontSize: "12px" }}>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsum mollitia soluta sint sit eum architecto repellendus tempora ad a!
        Perspiciatis consequatur id, laudantium error laboriosam obcaecati vero reprehenderit autem eaque ab delectus, ratione at cumque. Eum dolor
        nemo blanditiis consectetur fuga nam quidem reprehenderit deleniti soluta reiciendis, magnam quibusdam.
      </p>
      {/* <p style={{ fontSize: "24px", fontWeight: "900" }}>Price per room: {accommodation.data.data.attributes.price}</p>
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
      </div> */}
      <AccommodationEnquiryData data={accommodation} />
    </StyledPageWrapper>
  );
}

export default Accommodation;
