import styled from "styled-components";

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 20px 0 20px;
  box-shadow: 2px 2px 5px #000;
  max-width: 900px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
