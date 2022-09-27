import { PropTypes } from "prop-types";
import styled from "styled-components";

const StyledAccommodationAmenitiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
`;

export function AccommodationAmenities({ accommodation }) {
  return (
    <StyledAccommodationAmenitiesContainer>
      {accommodation.data.attributes.amenities
        ? accommodation.data.attributes.amenities.data.map((amenity) => {
            return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
          })
        : ""}
    </StyledAccommodationAmenitiesContainer>
  );
}

AccommodationAmenities.propTypes = {
  accommodation: PropTypes.object.isRequired,
};
