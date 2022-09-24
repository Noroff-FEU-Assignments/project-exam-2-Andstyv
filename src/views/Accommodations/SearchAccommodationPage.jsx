import React from "react";
import { Link, useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import PlaceHolderImg from "../../assets/img/placeholder_accommodation_img.jpg";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import {
  StyledAccommodationsAltCard,
  StyledAccommodationsAltCardImgContainer,
  StyledAccommodationsAltCardInfo,
  StyledAccommodationsAltCardInfoAmenities,
  StyledAccommodationsAltCardInfoAmenitiesText,
  StyledAccommodationsAltCardInfoTotal,
  StyledAccommodationsAltCards,
  StyledAccommodationsMain,
  StyledAccommodationsMainCardAmenitiesIcons,
  StyledAccommodationsMainCardDesc,
  StyledAccommodationsMainCardInfo,
  StyledAccommodationsMainCardStayData,
  StyledAccommodationsMainCardStayTotal,
  StyledAccommodationsMainImg,
} from "./searchAccommodationsPage.styles";
import { SkeletonSearchAccommodations } from "./SkeletonSearchAccommodations";
import { TestAcc } from "../../components/accommodations/TestAcc";

export function SearchAccommodationPage() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const { data, loading, error } = useFetchData(url);
  const { id } = useParams();

  const parsedId = parseFloat(id);
  const searchInput = parsedId;
  let results = data;
  let mainResult = [];

  if (loading) {
    return <SkeletonSearchAccommodations />;
  }
  const item = window.localStorage.getItem("stay");
  const accommodationData = JSON.parse(item);

  const checkIn = new Date(accommodationData.fromDate);
  const checkOut = new Date(accommodationData.toDate);

  const parsedCheckIn = checkIn.toLocaleDateString();
  const parsedCheckOut = checkOut.toLocaleDateString();

  const rooms = Math.ceil(accommodationData.guests / 2);

  function filterAccommodations() {
    const searchFilter = results.data.filter((value) => {
      return value.id === searchInput;
    });

    const filteredRemainingResults = results.data.filter((value) => {
      return value.id !== searchInput;
    });
    mainResult = searchFilter;
    results = filteredRemainingResults;
  }
  filterAccommodations();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="search-acc-wrap" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
      <TestAcc amenity={mainResult[0]} />
      <Link
        to={`/accommodation/${mainResult[0].id}`}
        style={{
          textDecoration: "none",
          color: "#000",
        }}
      >
        <StyledAccommodationsMain>
          <div>
            <StyledAccommodationsMainImg
              src={mainResult[0].attributes.images.data ? mainResult[0].attributes.images.data[0].attributes.url : PlaceHolderImg}
              alt={mainResult[0].attributes.title}
            />
          </div>
          <StyledAccommodationsMainCardInfo>
            <h2 style={{ marginTop: "0", marginBottom: "5px" }}>{mainResult[0].attributes.title}</h2>
            <StyledAccommodationsMainCardAmenitiesIcons>
              {mainResult[0].attributes.amenities
                ? mainResult[0].attributes.amenities.data.map((amenity) => {
                    return (
                      <div key={amenity.id}>
                        <img src={amenity.attributes.Icon.data[0].attributes.url} alt={amenity.attributes.Amenity}></img>{" "}
                      </div>
                    );
                  })
                : ""}
            </StyledAccommodationsMainCardAmenitiesIcons>
            <StyledAccommodationsMainCardDesc>
              <p style={{ margin: "10px 0" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt deleniti sit, quasi facere repellendus quaerat voluptate
                aspernatur assumenda evenie ...
              </p>
              <p style={{ fontWeight: "900", margin: "10px 0" }}>Amenities:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {mainResult[0].attributes.amenities
                  ? mainResult[0].attributes.amenities.data.map((amenity) => {
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
                <div>${mainResult[0].attributes.price * accommodationData.days * rooms}</div>
              </StyledAccommodationsMainCardStayTotal>
            </StyledAccommodationsMainCardStayData>
          </StyledAccommodationsMainCardInfo>
        </StyledAccommodationsMain>
      </Link>
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
    </div>
  );
}
