import styled from "styled-components";

export const StyledAdminBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  max-height: 100px;
  flex-wrap: wrap;
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }
  .active {
    font-weight: bold;
  }
`;

export const StyledAdminBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 0 10px;
  height: 100%;
  border-radius: 10px;
  justify-content: space-evenly;
  flex-wrap: ${(props) => props.flexWrap || ""};
  max-width: ${(props) => props.maxWidth || ""};
  color: #000;
  background: var(--color-yellow);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
