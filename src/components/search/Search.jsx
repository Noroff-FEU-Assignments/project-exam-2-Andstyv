import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 600px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 2px;
  border: none;
  margin-top: -100px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 800px;
    margin-top: -35px;
  }
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

  @media only screen and (min-width: 768px) {
    border-bottom: none;
    border-left: ${(props) => props.borderLeftMd};
  }
`;

const StyledSearchFormResults = styled.div`
  background: rgb(240, 240, 240);
  position: absolute;
  top: 65px;
  min-width: 200px;
  width: 100%;
  margin-left: -20px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  text-align: start;

  div {
    margin: 25px 0 20px 25px;
  }
`;

const StyledSearchFormBtn = styled.button`
  padding: 10px;
  grid-column: 1/3;
  border: none;
  border-top: 1px solid #000;
  background: #3b5053;
  color: #ffda60;
  font-size: 36px;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 5;
    border: none;
  }
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
            <StyledSearchFormLabel htmlFor="location">Location</StyledSearchFormLabel>
            <StyledSearchFormInput type={"text"} id="location" placeholder={"Search accommodations"} value={searchQuery} onChange={handleSearch} />
            <StyledSearchFormResults>
              {filteredResults &&
                filteredResults.slice(0, 10).map((value, key) => {
                  return (
                    <div key={value.id}>
                      <Link to={`accommodation/${value.id}`}>{value.attributes.title}</Link>
                    </div>
                  );
                })}
            </StyledSearchFormResults>
          </StyledSearchFormDiv>{" "}
          <StyledSearchFormDiv padding="10px 20px 0 20px" borderLeftMd="1px solid #000">
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
