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

  .logo {
    padding: 0;
    color: #fff;
    font-size: var(--font-size-logo);
    text-decoration: none;
    font-weight: bold;
  }
`;
