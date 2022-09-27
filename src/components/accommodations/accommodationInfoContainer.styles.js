import styled from "styled-components";

export const StyledAccommodationInfoContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  min-height: 450px;

  h1 {
    margin-top: 9px;
  }

  h2 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    min-width: 400px;
    width: 40%;
  }
`;
