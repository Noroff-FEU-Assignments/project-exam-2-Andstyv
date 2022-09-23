import { StyledContactInfo } from "./contactInfo.styles";

export function ContactInfo() {
  return (
    <>
      <StyledContactInfo>
        <div className="contact-info" style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <div id="address">221B Baker St, Marylebone, London NW1 6XE, UK</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <div>
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <label htmlFor="address">Telephone:</label>
              <div id="address">+44 1632 960218</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <div>
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <label htmlFor="address">E-mail:</label>
              <div id="address">hello@holidaze.com</div>
            </div>
          </div>
        </div>
      </StyledContactInfo>
    </>
  );
}
