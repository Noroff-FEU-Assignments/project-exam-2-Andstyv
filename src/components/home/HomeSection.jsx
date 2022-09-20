import { StyledHomeDiv, StyledHomeText, StyledPageWrapper } from "./homeSection.styles";

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
