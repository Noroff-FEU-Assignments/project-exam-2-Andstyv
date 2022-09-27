import styled from "styled-components";

export const StyledAdminEnquiriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  max-width: 400px;
`;
export const StyledAdmindEnquiry = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
`;
export const StyledAdminEnquiryContactInfoContainer = styled.div`
  margin: 10px 0;
`;
export const StyledAdminEnquiryLabel = styled.div`
  min-width: 60px;
  font-weight: bold;
  margin-top ${(props) => props.marginTop || "0"};
`;

export const StyledAdmindEnquiryContainer = styled.div`
  display: flex;
  flex-direction ${(props) => props.flexDirection || "row"};
  margin-top ${(props) => props.marginTop || "0"};
`;

export const StyledAdminEnquiryTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
`;
