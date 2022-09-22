import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import AuthContext from "../../context/AuthContext";
import { StyledHambOverlayUl } from "./hamburgerOverlayMenu.styles";

const StyledNavLogoutBtn = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

export const HamburgerOverlayMenu = ({ open, setOpen }) => {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();
  function logout() {
    setAuth(null);
    localStorage.removeItem("auth");
    history("/");
  }

  const closeMenu = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <StyledHambOverlayUl open={open}>
      <li onClick={closeMenu}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li id="admin-logout" onClick={closeMenu}>
        {auth ? (
          <>
            <NavLink to="/admin/messages">Admin</NavLink>{" "}
            <StyledNavLogoutBtn id="logout__btn" onClick={logout}>
              Log out
            </StyledNavLogoutBtn>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </StyledHambOverlayUl>
  );
};
