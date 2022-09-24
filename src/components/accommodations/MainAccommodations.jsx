import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import PlaceHolderImg from "../../assets/img/placeholder_accommodation_img.jpg";
import {
  StyledAccommodationsMain,
  StyledAccommodationsMainCardAmenitiesIcons,
  StyledAccommodationsMainCardDesc,
  StyledAccommodationsMainCardInfo,
  StyledAccommodationsMainCardStayData,
  StyledAccommodationsMainCardStayTotal,
  StyledAccommodationsMainImg,
} from "../../views/SearchAccommodations/searchAccommodationsPage.styles";
import { AccommodationAmenitiesIcons } from "./AccommodationAmenitiesIcons";

export function MainAccommodations({ accommodation, parsedCheckIn, parsedCheckOut, rooms, accommodationData }) {
  console.log(accommodation);
  return (
    <Link
      to={`/accommodation/${accommodation.id}`}
      style={{
        textDecoration: "none",
        color: "#000",
      }}
    >
      <StyledAccommodationsMain>
        <div>
          <StyledAccommodationsMainImg
            src={accommodation.attributes.images.data ? accommodation.attributes.images.data[0].attributes.url : PlaceHolderImg}
            alt={accommodation.attributes.title}
          />
        </div>
        <StyledAccommodationsMainCardInfo>
          <h2 style={{ marginTop: "0", marginBottom: "5px" }}>{accommodation.attributes.title}</h2>
          <StyledAccommodationsMainCardAmenitiesIcons>
            <AccommodationAmenitiesIcons accommodation={accommodation} />
          </StyledAccommodationsMainCardAmenitiesIcons>
          <StyledAccommodationsMainCardDesc>
            <p style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt deleniti sit, quasi facere repellendus quaerat voluptate aspernatur
              assumenda evenie ...
            </p>
            <p style={{ fontWeight: "900", margin: "10px 0" }}>Amenities:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {accommodation.attributes.amenities
                ? accommodation.attributes.amenities.data.map((amenity) => {
                    return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
                  })
                : ""}
            </div>
          </StyledAccommodationsMainCardDesc>
          <StyledAccommodationsMainCardStayData borderTop="1px solid #000">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>From:</div>
              <div>{parsedCheckIn}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>To:</div>
              <div>{parsedCheckOut}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50px" }}>
              <div>Nights:</div>
              <div>{accommodationData.days}</div>
            </div>
          </StyledAccommodationsMainCardStayData>
          <StyledAccommodationsMainCardStayData marginTop="0">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Guests:</div>
              <div>{accommodationData.guests}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Rooms:</div>
              <div>{rooms}</div>
            </div>
            <StyledAccommodationsMainCardStayTotal>
              <div>Total:</div>
              <div>${accommodation.attributes.price * accommodationData.days * rooms}</div>
            </StyledAccommodationsMainCardStayTotal>
          </StyledAccommodationsMainCardStayData>
        </StyledAccommodationsMainCardInfo>
      </StyledAccommodationsMain>
    </Link>
  );
}

MainAccommodations.propTypes = {
  accommodation: PropTypes.shape({
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
};
