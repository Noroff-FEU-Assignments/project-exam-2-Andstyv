import React from "react";
import styled from "styled-components";
import EnquiryModal from "../elements/EnquiryModal";

const StyledEnquiryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border: 1px solid black;
`;

export function AccommodationEnquiryData({ data }) {
  const item = window.localStorage.getItem("stay");
  const accommodationData = JSON.parse(item);
  const checkIn = new Date(accommodationData.fromDate);
  const checkOut = new Date(accommodationData.toDate);
  console.log(data);

  const accommodation = data;

  const parsedCheckIn = checkIn.toLocaleDateString();
  const parsedCheckOut = checkOut.toLocaleDateString();
  return (
    <StyledEnquiryContainer style={{ border: "1px solid black", borderRadius: "10px", position: "absolute", bottom: "20px" }}>
      {accommodationData && (
        <>
          <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
            <label htmlFor="checkin">From:</label>
            <div id="checkin">{parsedCheckIn}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
            <label htmlFor="checkout">To:</label>
            <div id="checkout">{parsedCheckOut}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "5px", alignItems: "center" }}>
            <label htmlFor="guests">Guests:</label>
            <div id="guests">{accommodationData.guests}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "5px", alignItems: "center" }}>
            <label htmlFor="total-price">Total:</label>
            <div id="total-price">{accommodationData.days * accommodation.data.data.attributes.price}</div>
          </div>
        </>
      )}
      <EnquiryModal amenity={accommodationData} />
    </StyledEnquiryContainer>
  );
}
