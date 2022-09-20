import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getAuth } from "../../constants/getAuth";
import { StyledPageWrapper } from "../home/HomeSection";
import Footer from "../layout/Footer";

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
      <StyledPageWrapper style={{ marginTop: "20px" }}>
        <h1 style={{ marginTop: "0" }}>Admin Home</h1>
        <NavLink to="messages">Messages</NavLink>
        <NavLink to="enquiries">Enquiries</NavLink>
        <NavLink to="create">Create new accommodation</NavLink>
        <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
