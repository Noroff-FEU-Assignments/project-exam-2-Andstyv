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
    <div>
      <div>
        <h2>{mainResult[0].attributes.title}</h2>
        <div>From: {loc.fromDate}</div>
        <div>To: {loc.toDate}</div>
        <div>Days {loc.days}</div>
        <p>Total: {mainResult[0].attributes.price * loc.days}</p>
      </div>
      <div>
        <h3>Other alternatives:</h3>
        {results &&
          results.map((accommodation) => {
            return (
              <div key={accommodation.id}>
                <Link to={`/accommodation/${accommodation.id}`}>{accommodation.attributes.title}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
