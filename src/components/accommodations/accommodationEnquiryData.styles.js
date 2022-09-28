import styled from "styled-components";

export const StyledEnquiryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  bottom: 20px;
  margin-top: auto;
  box-shadow: var(--default-box-shadow);
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: auto;
  }
`;

export const StyledEnquiryLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: ${(props) => props.alignItems || ""};
`;
