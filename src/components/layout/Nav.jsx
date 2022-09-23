import React from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { Nav } from "./nav.styles";

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
