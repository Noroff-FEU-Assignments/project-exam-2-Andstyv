// import { useState } from "react";
// import { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import AuthContext from "../../context/AuthContext";
// import HamburgerMenu from "./HamburgerMenu";

// const StyledHamburgerContainer = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: fixed;
//     padding-top: 10px;
//     margin-left: 10px;
//     z-index: 99;
//   }
// `;

// function Nav() {
//   const [auth, setAuth] = useContext(AuthContext);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const history = useNavigate();

//   const toggleHamburgerMenu = () => {
//     setHamburgerOpen(!hamburgerOpen);
//   };

//   const StyledNavUl = styled.ul`
//     display: ${hamburgerOpen ? "inline" : "none"};
//     background-color: blue;
//     height: 100vh;
//     width: 50vw;
//     margin-top: 50px;
//     position: absolute;
//   `;

//   function logout() {
//     setAuth(null);
//     localStorage.removeItem("auth");
//     history("/");
//   }
//   return (
//     <nav>
//       <StyledNavUl>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//         <li id="admin-logout">
//           {auth ? (
//             <>
//               <NavLink to="/admin">Admin</NavLink>{" "}
//               <button id="logout__btn" onClick={logout}>
//                 Log out
//               </button>
//             </>
//           ) : (
//             <NavLink to="/login">Login</NavLink>
//           )}
//         </li>
//       </StyledNavUl>
//       <StyledHamburgerContainer onClick={toggleHamburgerMenu}>
//         <HamburgerMenu />
//       </StyledHamburgerContainer>
//     </nav>
//   );
// }

// export default Nav;
