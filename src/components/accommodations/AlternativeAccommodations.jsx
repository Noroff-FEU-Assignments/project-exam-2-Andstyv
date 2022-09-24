import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import PlaceHolderImg from "../../assets/img/placeholder_accommodation_img.jpg";
import {
  StyledAccommodationsAltCard,
  StyledAccommodationsAltCardImgContainer,
  StyledAccommodationsAltCards,
  StyledAccommodationsAltCardInfo,
  StyledAccommodationsAltCardInfoAmenities,
  StyledAccommodationsAltCardInfoAmenitiesText,
  StyledAccommodationsAltCardInfoTotal,
} from "../../views/Accommodations/searchAccommodationsPage.styles";

export function AlternativeAccommodations({ results, accommodationData, rooms }) {
  console.log(results);
  return (
    <StyledAccommodationsAltCards>
      <h3 style={{ marginTop: "40px", marginBottom: "10px" }}>Other alternatives:</h3>
      {results &&
        results.map((accommodation) => {
          return (
            <Link
              to={`/accommodation/${accommodation.id}`}
              key={accommodation.id}
              style={{
                boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
                textDecoration: "none",
                color: "#000",
                marginBottom: "20px",
              }}
            >
              <StyledAccommodationsAltCard>
                <StyledAccommodationsAltCardImgContainer>
                  <img
                    src={accommodation.attributes.images.data ? accommodation.attributes.images.data[0].attributes.url : PlaceHolderImg}
                    alt={accommodation.attributes.title}
                  />
                </StyledAccommodationsAltCardImgContainer>
                <StyledAccommodationsAltCardInfo>
                  <h4>{accommodation.attributes.title}</h4>
                  <StyledAccommodationsAltCardInfoAmenities>
                    {accommodation.attributes.amenities
                      ? accommodation.attributes.amenities.data.map((amenity) => {
                          return (
                            <div key={amenity.id}>
                              <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "12px" }}></img>{" "}
                            </div>
                          );
                        })
                      : ""}
                  </StyledAccommodationsAltCardInfoAmenities>
                  <StyledAccommodationsAltCardInfoAmenitiesText>
                    {accommodation.attributes.amenities
                      ? accommodation.attributes.amenities.data.map((amenity) => {
                          return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
                        })
                      : ""}
                  </StyledAccommodationsAltCardInfoAmenitiesText>
                  <StyledAccommodationsAltCardInfoTotal>
                    Total: ${accommodation.attributes.price * accommodationData.days * rooms}
                  </StyledAccommodationsAltCardInfoTotal>
                </StyledAccommodationsAltCardInfo>
              </StyledAccommodationsAltCard>
            </Link>
          );
        })}
    </StyledAccommodationsAltCards>
  );
}

AlternativeAccommodations.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      attributes: PropTypes.shape({
        amenities: PropTypes.object,
        description: PropTypes.string,
        images: PropTypes.object,
        price: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
      }),
    })
  ),
};
