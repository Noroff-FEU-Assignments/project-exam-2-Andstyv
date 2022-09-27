import { PropTypes } from "prop-types";
import styled from "styled-components";

const StyledAmenitiesContainer = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 18px;
  }
`;

export function AccommodationAmenitiesIcons({ accommodation }) {
  return (
    <StyledAmenitiesContainer>
      {accommodation.attributes.amenities.data.map((amenity) => {
        return (
          <div key={amenity.id}>
            <img src={amenity.attributes.Icon.data[0].attributes.url} alt={amenity.attributes.Amenity} />
          </div>
        );
      })}
    </StyledAmenitiesContainer>
  );
}

AccommodationAmenitiesIcons.propTypes = {
  accommodation: PropTypes.object.isRequired,
};
