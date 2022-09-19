import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b5053;
  border-bottom: 0;
  .logo {
    padding: 15px 0;
    color: #fff;
    font-size: 36px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Holidaze</div>
      <HamburgerMenu />
    </Nav>
  );
};

export default Navbar;
