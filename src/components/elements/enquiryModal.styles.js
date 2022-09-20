import styled from "styled-components";

export const StyledEnquiryModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  max-width: 300px;
  max-height: 600px;
  padding: 20px 40px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflowy: auto;
  background-color: #fff;
  z-index: 99;
  border-radius: 20px;

  input {
    font-size: 16px;
  }
  button {
    margin: 20px 0;
  }
`;

export const StyledEnquiryModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  zindex: 5;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.8);
`;
