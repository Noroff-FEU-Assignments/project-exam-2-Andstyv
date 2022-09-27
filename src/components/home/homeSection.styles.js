import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-dirextion: column;
  align-items: stretch;
`;

export const StyledHomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 100px;

  img {
    border-radius: 5px;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: ${(props) => props.flexDirection || "row"};
    max-width: 900px;
  }
`;

export const StyledHomeText = styled.div`
  padding: 0px;
  text-align: start;

  h2 {
    padding-top: 0px;
    margin-top: 0px;
  }
  @media only screen and (min-width: 768px) {
    padding: ${(props) => props.homeTextPadding || "20px"};
  }
`;

export const StyledHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
