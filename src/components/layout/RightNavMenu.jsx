import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";

const Ul = styled.ul`
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

const RightNavMenu = ({ open, setOpen }) => {
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
    <Ul open={open}>
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
            <button id="logout__btn" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </Ul>
  );
};

export default RightNavMenu;
