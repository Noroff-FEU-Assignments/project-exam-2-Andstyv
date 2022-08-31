import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 600px;
  box-shadow: 4px 6px 5px;
  background-color: #fff;
  border-radius: 2px;
  border: none;
  margin-top: -40px;
`;

const StyledSearchFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.minWidth || "0px"};
  position: ${(props) => props.position || "static"};
  padding: ${(props) => props.padding || "0px"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
`;

const StyledSearchFormResults = styled.div`
  background: beige;
  position: absolute;
  top: 40px;
  min-width: 200px;
`;

const StyledSearchFormBtn = styled.button`
  padding: 10px;
  grid-column: 1/3;
  border: none;
  border-top: 1px solid #000;
  background: #3b5053;
  color: #ffda60;
  text-transform: uppercase;
  font-size: 36px;
  font-family: monospace;
  font-weight: bold;
`;

const StyledSearchFormInput = styled.input`
  border: none;
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin-top: 5px;
  padding: 2px 0px;
`;

const StyledSearchFormLabel = styled.label`
  text-align: start;
`;

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
      <div style={{ display: "flex", flexDirection: "column", margin: "0 20px", alignItems: "center" }}>
        <StyledSearchForm action="">
          <StyledSearchFormDiv
            minWidth="200px"
            position="relative"
            padding="10px 20px 0 20px"
            gridColumn="1/3"
            gridRow="1"
            borderBottom="1px solid #000"
          >
            <label htmlFor="location">Location</label>
            <StyledSearchFormInput type={"text"} id="location" placeholder={"Search accommodations"} value={searchQuery} onChange={handleSearch} />
            <StyledSearchFormResults>
              {filteredResults &&
                filteredResults.slice(0, 10).map((value, key) => {
                  return (
                    <div key={value.id} style={{ margin: "20px 0px" }}>
                      <Link to={`accommodation/${value.id}`}>{value.attributes.title}</Link>
                    </div>
                  );
                })}
            </StyledSearchFormResults>
          </StyledSearchFormDiv>{" "}
          <StyledSearchFormDiv padding="10px 20px 0 20px">
            <StyledSearchFormLabel htmlFor="from-date">From Date</StyledSearchFormLabel>
            <StyledSearchFormInput type={"date"} id="from-date" placeholder={"from date"} />
          </StyledSearchFormDiv>{" "}
          <StyledSearchFormDiv padding="10px 20px 0 20px" borderLeft="1px solid #000">
            <StyledSearchFormLabel htmlFor="to-date">To Date</StyledSearchFormLabel>
            <StyledSearchFormInput type={"date"} id="to-date" placeholder={"to date"} />
          </StyledSearchFormDiv>
          <StyledSearchFormBtn>Search</StyledSearchFormBtn>
        </StyledSearchForm>
      </div>
    </>
  );
}
