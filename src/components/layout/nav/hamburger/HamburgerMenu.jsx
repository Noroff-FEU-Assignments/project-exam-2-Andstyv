import React, { useState } from "react";
import { StyledHamburgerMenu } from "./hamburgerMenu.styles";
import { HamburgerOverlayMenu } from "./HamburgerOverlayMenu";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledHamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div id="hamburger-line" />
        <div id="hamburger-line" />
        <div id="hamburger-line" />
      </StyledHamburgerMenu>
      <HamburgerOverlayMenu open={open} setOpen={setOpen} />
    </>
  );
};
