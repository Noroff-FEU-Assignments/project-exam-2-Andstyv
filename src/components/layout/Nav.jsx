import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b5053;
  border-bottom: 0;
  .logo {
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo">
        Holidaze
      </Link>
      <HamburgerMenu />
    </Nav>
  );
};

export default Navbar;
