import styled from "styled-components";

export const StyledHambOverlayUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  align-items: baseline;
  padding: 0;
  li {
    padding: 0;

    a  {
      color: var(--main-bg-color);
      text-decoration: none;
      cursor: pointer;
      transition: all 0.5s;

      :hover {
        font-size: 110%;
      }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color-black);
    position: fixed;
    gap: 30px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding: 0;
    margin-top: 0;
    padding-top: 100px;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    align-items: center;

    li {
      text-align: center;
      display: flex;
      margin-top: 30px;
      width: 75%;
      justify-content: center;
      a {
        color: var(--main-bg-color);
      }
    }
  }
`;

export const StyledNavLogoutBtn = styled.button`
  background-color: var(--color-yellow);
  color: var(--color-black);
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-left: 0px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: 5px;
  }
`;
