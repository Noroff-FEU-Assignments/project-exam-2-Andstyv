import { StyledContactInfo, StyledContactInfoMainContainer, StyledContactInfoSecondaryContainer } from "./contactInfo.styles";

export function ContactInfo() {
  return (
    <>
      <StyledContactInfo>
        <StyledContactInfoMainContainer>
          <StyledContactInfoSecondaryContainer>
            <div>
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <div id="address">221B Baker St, Marylebone, London NW1 6XE, UK</div>
            </div>
          </StyledContactInfoSecondaryContainer>
          <StyledContactInfoSecondaryContainer marginTop={"20px"}>
            <div>
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <label htmlFor="address">Telephone:</label>
              <div id="address">+44 1632 960218</div>
            </div>
          </StyledContactInfoSecondaryContainer>
          <StyledContactInfoSecondaryContainer marginTop={"20px"}>
            <div>
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <label htmlFor="address">E-mail:</label>
              <div id="address">hello@holidaze.com</div>
            </div>
          </StyledContactInfoSecondaryContainer>
        </StyledContactInfoMainContainer>
      </StyledContactInfo>
    </>
  );
}
