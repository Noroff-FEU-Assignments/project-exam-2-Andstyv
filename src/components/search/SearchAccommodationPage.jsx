import React from "react";
import { Link, useParams } from "react-router-dom";

import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function SearchAccommodationPage() {
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + populateApi;
  const { data, loading, error } = useFetchData(url);
  const { id } = useParams();

  let newId = parseFloat(id);
  console.log(newId);

  let results = data;

  if (loading) {
    return <div>Loading</div>;
  }
  const item = window.localStorage.getItem("stay");
  const loc = JSON.parse(item);
  const searchInput = newId;
  let mainResult = [];

  function newTest() {
    console.log("hello");
    const searchFilter = results.data.filter((value) => {
      return value.id === searchInput;
    });

    const restFilter = results.data.filter((value) => {
      return value.id !== searchInput;
    });
    mainResult = searchFilter;
    results = restFilter;
    console.log(searchFilter);
  }
  newTest();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="wrapper" style={{ margin: "0 20px" }}>
      <div className="main" style={{ display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)" }}>
        <div>
          <img
            src={mainResult[0].attributes.images.data[0].attributes.url}
            alt="Hotel"
            style={{ width: "100%", height: "auto", maxHeight: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-info" style={{ padding: "10px" }}>
          <h2 style={{ marginTop: "0", marginBottom: "5px" }}>{mainResult[0].attributes.title}</h2>
          <div className="amenities" style={{ display: "flex", gap: "10px" }}>
            {mainResult[0].attributes.amenities.data.map((amenity) => {
              return (
                <div key={amenity.id}>
                  <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "16px" }}></img>{" "}
                </div>
              );
            })}
          </div>
          <div className="desc" style={{ fontSize: "14px" }}>
            <p style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt deleniti sit, quasi facere repellendus quaerat voluptate aspernatur
              assumenda evenie ...
            </p>
            <p style={{ fontWeight: "900", margin: "10px 0" }}>Amenities:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {mainResult[0].attributes.amenities.data.map((amenity) => {
                return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
              })}
            </div>
          </div>
          <div
            className="stay-data"
            style={{
              display: "flex",
              fontSize: "14px",
              justifyContent: "space-between",
              marginTop: "20px",
              borderTop: "1px solid #000",
              paddingTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>From:</div>
              <div>{loc.fromDate}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>To:</div>
              <div>{loc.toDate}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Nights:</div>
              <div>{loc.days}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Total:</div>
              <div>${mainResult[0].attributes.price * loc.days}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rest" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <img
                      src={accommodation.attributes.images.data[0].attributes.url}
                      alt="Hotel"
                      style={{ width: "100px", height: "100%", maxHeight: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                    <h4 style={{ margin: "0" }}>{accommodation.attributes.title}</h4>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
                      {accommodation.attributes.amenities.data.map((amenity) => {
                        return (
                          <div key={amenity.id}>
                            <img src={amenity.attributes.Icon.data[0].attributes.url} alt="Amenity icon" style={{ width: "12px" }}></img>{" "}
                          </div>
                        );
                      })}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", fontSize: "12px" }}>
                        {accommodation.attributes.amenities.data.map((amenity) => {
                          return <div key={amenity.id}>· {amenity.attributes.Amenity}</div>;
                        })}
                      </div>
                    </div>
                    <div style={{ justifyItems: "flex-end", marginTop: "25px" }}>
                      Total for {loc.days} nights: {accommodation.attributes.price * loc.days}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
