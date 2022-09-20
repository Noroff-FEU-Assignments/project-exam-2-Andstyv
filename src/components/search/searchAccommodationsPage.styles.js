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
`;

export const StyledAccommodationsMainImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const StyledAccommodationsMainCardInfo = styled.div`
  padding: 10px;
`;

export const StyledAccommodationsMainCardAmenitiesIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 16px;
  }
`;

export const StyledAccommodationsMainCardStayData = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop || "20px"};
  border-top: ${(props) => props.borderTop || "none"};
  padding-top: 10px;
`;

// STYLING ALTENRATIVES CARDS

export const StyledAccommodationsAltCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
`;

export const StyledAccommodationsAltCardImgContainer = styled.div`
  img {
    width: 100px;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }
`;

export const StyledAccommodationsAltCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  h4 {
    margin: 0;
  }
`;

export const StyledAccommodationsAltCardInfoAmenities = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const StyledAccommodationsAltCardInfoAmenitiesText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 12px;
`;
