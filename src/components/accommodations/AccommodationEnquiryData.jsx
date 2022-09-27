import { PropTypes } from "prop-types";
import { EnquiryModal } from "../modals/EnquiryModal";
import { dateConverter } from "../utils/converters/dateConverter";
import { StyledEnquiryContainer, StyledEnquiryLabelContainer } from "./accommodationEnquiryData.styles";

export function AccommodationEnquiryData({ data }) {
  const item = window.localStorage.getItem("stay");
  const accommodationData = JSON.parse(item);
  const accommodation = data;
  let { parsedCheckIn, parsedCheckOut, rooms } = dateConverter(accommodationData);

  return (
    <StyledEnquiryContainer>
      {accommodationData && (
        <>
          <StyledEnquiryLabelContainer>
            <label htmlFor="checkin">From:</label>
            <div id="checkin">{parsedCheckIn}</div>
          </StyledEnquiryLabelContainer>
          <StyledEnquiryLabelContainer>
            <label htmlFor="checkout">To:</label>
            <div id="checkout">{parsedCheckOut}</div>
          </StyledEnquiryLabelContainer>
          <StyledEnquiryLabelContainer alignItems={"center"}>
            <label htmlFor="guests">Guests:</label>
            <div id="guests">{accommodationData.guests}</div>
          </StyledEnquiryLabelContainer>
          <StyledEnquiryLabelContainer alignItems={"center"}>
            <label htmlFor="total-price">Total:</label>
            <div id="total-price" style={{ fontWeight: "bold" }}>
              ${accommodationData.days * accommodation.data.attributes.price * rooms}
            </div>
          </StyledEnquiryLabelContainer>
        </>
      )}
      <EnquiryModal accommodation={accommodationData} />
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
