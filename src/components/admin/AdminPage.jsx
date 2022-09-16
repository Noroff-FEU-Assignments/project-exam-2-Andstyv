import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getAuth } from "../../constants/getAuth";

export function AdminPage() {
  const history = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!auth) {
      history("/");
    }
  });

  return (
    <>
      <h1>Admin Home</h1>
      <NavLink to="messages">Messages</NavLink>
      <NavLink to="enquiries">Enquiries</NavLink>
      <NavLink to="create">Create new accommodation</NavLink>
      <Outlet />
    </>
  );
}
