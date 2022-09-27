import { StyledHomeDiv, StyledHomeText, StyledHomeWrapper } from "./homeSection.styles";
import AdventureImg from "../../assets/img/holidaze_home_adventure.jpg";
import AccommodationsImg from "../../assets/img/holidaze_home_accommodations.jpg";

export function HomeSection() {
  return (
    <StyledHomeWrapper>
      <div style={{ maxWidth: "900px" }}>
        <StyledHomeDiv flexDirection="row">
          <StyledHomeText homeTextPadding="0 20px 0 0">
            <h2>Enjoy some of Bergen's best accommodations</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum quo velit nisi minus, impedit in temporibus ipsum hic placeat illo
              voluptates illum. Voluptatum doloremque modi eos, commodi rerum provident, cupiditate delectus in deserunt ut inventore! Fuga asperiores
              adipisci fugiat ipsa! Ratione est repellendus eaque, in quibusdam ipsum? Quo, accusantium.
            </p>
          </StyledHomeText>
          <img src={AccommodationsImg} alt="Holidaze Accommodations"></img>
        </StyledHomeDiv>
        <StyledHomeDiv flexDirection="row-reverse">
          <StyledHomeText homeTextPadding="0 0 0 20px">
            <h2>Experience unforgettable adventures</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum quo velit nisi minus, impedit in temporibus ipsum hic placeat illo
              voluptates illum. Voluptatum doloremque modi eos, commodi rerum provident, cupiditate delectus in deserunt ut inventore! Fuga asperiores
              adipisci fugiat ipsa! Ratione est repellendus eaque, in quibusdam ipsum? Quo, accusantium.
            </p>
          </StyledHomeText>
          <img src={AdventureImg} alt="Holidaze Adventures"></img>
        </StyledHomeDiv>
      </div>
    </StyledHomeWrapper>
  );
}
