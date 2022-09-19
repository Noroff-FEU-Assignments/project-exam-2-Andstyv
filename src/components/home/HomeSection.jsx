import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 50px;
`;

const StyledHomeDiv = styled.div`
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

const StyledHomeText = styled.div`
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

function HomeSection() {
  return (
    <StyledPageWrapper>
      <div style={{ maxWidth: "900px" }}>
        <StyledHomeDiv flexDirection="row">
          <StyledHomeText homeTextPadding="0 20px 0 0">
            <h2>Lorem Ipsum Header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum quo velit nisi minus, impedit in temporibus ipsum hic placeat illo
              voluptates illum. Voluptatum doloremque modi eos, commodi rerum provident, cupiditate delectus in deserunt ut inventore! Fuga asperiores
              adipisci fugiat ipsa! Ratione est repellendus eaque, in quibusdam ipsum? Quo, accusantium.
            </p>
          </StyledHomeText>
          <img src="https://loremflickr.com/320/240" alt="placeholder"></img>
        </StyledHomeDiv>
        <StyledHomeDiv flexDirection="row-reverse">
          <StyledHomeText homeTextPadding="0 0 0 20px">
            <h2>Lorem Ipsum Header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum quo velit nisi minus, impedit in temporibus ipsum hic placeat illo
              voluptates illum. Voluptatum doloremque modi eos, commodi rerum provident, cupiditate delectus in deserunt ut inventore! Fuga asperiores
              adipisci fugiat ipsa! Ratione est repellendus eaque, in quibusdam ipsum? Quo, accusantium.
            </p>
          </StyledHomeText>
          <img src="https://loremflickr.com/320/240" alt="placeholder"></img>
        </StyledHomeDiv>
      </div>
    </StyledPageWrapper>
  );
}

export default HomeSection;
