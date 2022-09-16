import styled from "styled-components";

export const StyledSearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
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

export const StyledSearchFormDiv = styled.div`
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

export const StyledSearchFormResults = styled.div`
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

export const StyledSearchFormBtn = styled.button`
  padding: 10px;
  grid-column: 1/4;
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

export const StyledSearchFormInput = styled.input`
  border: none;
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin-top: 5px;
  padding: 2px 0px;
`;

export const StyledSearchFormLabel = styled.label`
  text-align: start;
`;
