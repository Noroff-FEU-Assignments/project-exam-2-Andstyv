import styled from "styled-components";

export const StyledEnquiryModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  max-width: 275px;
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflowy: auto;
  background-color: var(--main-bg-color);
  z-index: 99;
  border-radius: 20px;
`;

export const StyledEnquiryModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledEnquiryModalInput = styled.input`
  font-style: italic;
  border: none;
  border-bottom: 1px solid #000;
  border-radius: 0px;
  margin-top: 5px;
`;

export const StyledEnquiryBtn = styled.div`
  grid-row: 2;
  grid-column: 1/5;
  background-color: var(--color-light-black);
  border-radius: 0 0 7.5px 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    font-size: 110%;
    transition: 0.5s;
  }
`;

export const StyledEnquiryCloseBtn = styled.button`
  color: var(--color-yellow);
  background: var(--color-light-black);
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 0;
`;
