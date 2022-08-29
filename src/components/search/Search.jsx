import { useState } from "react";
import { Link } from "react-router-dom";

export function Search({ placeholder, data }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchQuery(searchInput);

    const searchFilter = data.filter((value) => {
      console.log(value);
      return value.attributes.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    if (searchInput === "") {
      setFilteredResults([]);
    } else {
      setFilteredResults(searchFilter);
    }
  };

  //   const clearInput = () => {
  //     setFilteredResults([]);
  //     setSearchQuery("");
  //   };

  return (
    <>
      <div>
        <div>
          <input type={"text"} placeholder={placeholder} value={searchQuery} onChange={handleSearch} />
        </div>
        <div>
          {filteredResults &&
            filteredResults.slice(0, 10).map((value, key) => {
              return (
                <li key={value.id}>
                  <Link to={`accommodation/${value.id}`}>{value.attributes.title}</Link>
                </li>
              );
            })}
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <form
          action=""
          style={{ display: "flex", justifyContent: "space-evenly", border: "1px solid #000", width: "600px", margin: "0 auto", padding: "20px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="location">Location</label>
            <input type={"text"} id="location" placeholder={"location"} />
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="from-date">From Date</label>
            <input type={"date"} id="from-date" placeholder={"from date"} />
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="to-date">To Date</label>
            <input type={"date"} id="to-date" placeholder={"to date"} />
          </div>
          <button>Søk</button>
        </form>
      </div>
    </>
  );
}
