import styled from "styled-components";

export const StyledHambOverlayUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  li {
    padding: 18px 10px;

    a  {
      color: #fff;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    gap: 10px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
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
