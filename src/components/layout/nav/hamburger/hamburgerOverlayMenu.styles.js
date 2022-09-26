import styled from "styled-components";

export const StyledHambOverlayUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  align-items: baseline;
  cursor: pointer;
  li {
    padding: 18px 10px;

    a  {
      color: #fff;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color-black);
    position: fixed;
    gap: 10px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    li {
      text-align: center;
      margin-top: 30px;
      a {
        color: #fff;
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
