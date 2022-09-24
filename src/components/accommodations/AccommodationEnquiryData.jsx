import { PropTypes } from "prop-types";
import styled from "styled-components";

import { EnquiryModal } from "../elements/EnquiryModal";
import { dateConverter } from "../utils/converters/dateConverter";

const StyledEnquiryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  bottom: 20px;
  margin-top: auto;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    margin-top: auto;
  }
`;

export function AccommodationEnquiryData({ data }) {
  const item = window.localStorage.getItem("stay");
  const accommodationData = JSON.parse(item);
  const accommodation = data;
  let { parsedCheckIn, parsedCheckOut, rooms } = dateConverter(accommodationData);

  return (
    <StyledEnquiryContainer style={{ borderRadius: "10px" }}>
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
            <div id="total-price" style={{ fontWeight: "bold" }}>
              ${accommodationData.days * accommodation.data.attributes.price * rooms}
            </div>
          </div>
        </>
      )}
      <EnquiryModal amenity={accommodationData} />
    </StyledEnquiryContainer>
  );
}

AccommodationEnquiryData.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        amenities: PropTypes.object,
        description: PropTypes.string,
        images: PropTypes.object,
        price: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
      }),
      id: PropTypes.number,
    }),
  }),
};
