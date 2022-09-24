import { PropTypes } from "prop-types";

export function AccommodationAmenitiesIcons({ accommodation }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {accommodation.attributes.amenities.data.map((amenity) => {
        return (
          <div key={amenity.id}>
            <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "18px" }} />
          </div>
        );
      })}
    </div>
  );
}

AccommodationAmenitiesIcons.propTypes = {
  accommodation: PropTypes.object.isRequired,
};
