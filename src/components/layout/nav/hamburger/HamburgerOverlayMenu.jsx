import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";
import { StyledHambOverlayUl, StyledNavLogoutBtn } from "./hamburgerOverlayMenu.styles";

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
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <NavLink to="/admin/messages">Admin</NavLink>{" "}
            <StyledNavLogoutBtn id="logout__btn" onClick={logout}>
              Log out
            </StyledNavLogoutBtn>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </StyledHambOverlayUl>
  );
};
