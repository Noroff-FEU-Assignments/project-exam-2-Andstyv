import styled from "styled-components";

const StyledSubmitFormBtn = styled.button`
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3b5053;
  color: #ffda60;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
`;

export function SubmitFormBtn() {
  return <StyledSubmitFormBtn />;
}
