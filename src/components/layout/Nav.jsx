import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useNavigate();

  function logout() {
    setAuth(null);
    localStorage.removeItem("auth");
    history("/");
  }
  return (
    <nav style={{ maxWidth: "600px", margin: "0 auto" }}>
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li id="admin-logout">
          {auth ? (
            <>
              <NavLink to="/admin">Admin</NavLink>{" "}
              <button id="logout__btn" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
