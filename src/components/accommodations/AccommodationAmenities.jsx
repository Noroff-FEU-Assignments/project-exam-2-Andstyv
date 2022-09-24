import { PropTypes } from "prop-types";

export function AccommodationAmenities({ accommodation }) {
  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "14px" }}>
      {accommodation.data.attributes.amenities
        ? accommodation.data.attributes.amenities.data.map((amenity) => {
            return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
          })
        : ""}
    </div>
  );
}

AccommodationAmenities.propTypes = {
  accommodation: PropTypes.object.isRequired,
};
