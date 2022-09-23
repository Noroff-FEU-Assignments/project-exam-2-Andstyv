import styled from "styled-components";

//  STYLING MAIN CARD

export const StyledAccommodationsWrapper = styled.div`
  margin: 0 20px;
  margin-top: 30px;
`;

export const StyledAccommodationsMain = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-height: 450px;
  }
`;

export const StyledAccommodationsMainImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  @media only screen and (min-width: 768px) {
    height: 100%;
    max-height: 100%;
    max-width: 350px;
    width: auto;
    border-radius: 5px 0 0 5px;
  }
`;

export const StyledAccommodationsMainCardInfo = styled.div`
  padding: 10px;
  @media only screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const StyledAccommodationsMainCardAmenitiesIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 16px;
  }
`;

export const StyledAccommodationsMainCardDesc = styled.div`
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size 18px
  }
`;

export const StyledAccommodationsMainCardStayData = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop || "20px"};
  border-top: ${(props) => props.borderTop || "none"};
  padding-top: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledAccommodationsMainCardStayTotal = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 900;
  width: 50px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

// STYLING ALTENRATIVES CARDS

export const StyledAccommodationsAltCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
`;

export const StyledAccommodationsAltCard = styled.div`
  display: flex;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    max-height: 300px;
  }
`;

export const StyledAccommodationsAltCardImgContainer = styled.div`
  img {
    width: 100px;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px 0 0 5px;

    @media only screen and (min-width: 768px) {
      width: 250px;
      height: 100%;
      max-height: 100%;
    }
  }
`;

export const StyledAccommodationsAltCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  h4 {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    padding: 20px;
    gap: 10px;

    h4 {
      font-size: 20px;
    }
  }
`;

export const StyledAccommodationsAltCardInfoAmenities = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    div {
      margin: 0 5px 0 5px;
      img {
        width: 20px !important;
      }
    }
  }
`;

export const StyledAccommodationsAltCardInfoAmenitiesText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledAccommodationsAltCardInfoTotal = styled.div`
  font-size: 14px;
  margin-top: 25px;
  justify-items: flex-end;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
