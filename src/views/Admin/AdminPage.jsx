import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getAuth } from "../../constants/getAuth";
import { StyledAdminBtn, StyledAdminBtnsContainer } from "./adminPage.styles";

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
      <div
        className="admin-wrap"
        style={{ margin: "50px 20px 0 20px", maxWidth: "900px", display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}
      >
        <h1 style={{ marginTop: "0", alignSelf: "center" }}>Admin Home</h1>
        <StyledAdminBtnsContainer>
          <NavLink to="messages">
            <StyledAdminBtn>
              <div>
                <i className="far fa-comment-alt"></i>
              </div>
              <div>Messages</div>
            </StyledAdminBtn>
          </NavLink>
          <NavLink to="enquiries">
            <StyledAdminBtn>
              <div>
                <i className="fas fa-hotel"></i>
              </div>
              <div>Enquiries</div>
            </StyledAdminBtn>
          </NavLink>
          <NavLink to="create">
            <StyledAdminBtn maxWidth={"120px"} flexWrap={"wrap"}>
              <div>
                <i className="fas fa-plus-circle"></i>
              </div>
              <div style={{ textAlign: "center" }}>Create new accommodation</div>
            </StyledAdminBtn>
          </NavLink>
        </StyledAdminBtnsContainer>
        <Outlet />
      </div>
    </>
  );
}
