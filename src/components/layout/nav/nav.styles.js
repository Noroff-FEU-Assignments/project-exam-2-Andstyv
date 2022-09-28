import styled from "styled-components";

export const Nav = styled.nav`
  height: 55px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222831;
  border-bottom: 0;
  font-family: var(--font-primary);
  ul {
    text-transform: uppercase;
  }

  .logo {
    padding: 0;
    color: var(--main-bg-color);
    font-size: var(--font-size-logo);
    text-decoration: none;
    font-weight: bold;
  }

  .active {
    padding-bottom: 2px;
    border-bottom: 2px solid var(--color-yellow);
  }
`;
