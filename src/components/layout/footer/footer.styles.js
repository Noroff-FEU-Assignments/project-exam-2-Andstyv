import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 150px;
  background: #222831;
  flex-shrink: 0;
  margin-top: 100px;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledFooterMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  justify-content: space-around;
  max-width: 940px;
  align-self: center;
  color: var(--main-bg-color);
  font-family: var(--font-primary);

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 20px;
    justify-content: space-between;
  }
`;
