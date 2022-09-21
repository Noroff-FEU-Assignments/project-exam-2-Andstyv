import React from "react";
import styled from "styled-components";
import contactImage from "../../assets/img/contactimg.webp";

const StyledContactInfo = styled.div`
  height: 100%;
  border-radius: 0 0 20px 20px;
  background-image: url(${contactImage}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  font-size: 20px;

  @media (min-width: 768px) {
    border-radius: 0 20px 20px 0;
    height: auto;
    max-width: 400px;
  }
`;

export function ContactInfo() {
  return (
    <>
      <StyledContactInfo>
        <div className="contact-info" style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <div id="address">221B Baker St, Marylebone, London NW1 6XE, UK</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <div>
              <i class="fas fa-phone"></i>
            </div>
            <div>
              <label htmlFor="address">Telephone:</label>
              <div id="address">+44 1632 960218</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <div>
              <i class="fas fa-envelope"></i>
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
