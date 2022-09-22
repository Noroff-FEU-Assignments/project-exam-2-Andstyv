import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth } from "../../constants/getAuth";

const StyledAdminBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  max-height: 100px;
  flex-wrap: wrap;
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }
`;

const StyledAdminBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 0 10px;
  height: 100%;
  border-radius: 10px;
  justify-content: space-evenly;
  flex-wrap: ${(props) => props.flexWrap || ""};
  max-width: ${(props) => props.maxWidth || ""};
  color: #000;
  background: #ffda60;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

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
      <div className="admin-wrap" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
        <h1 style={{ marginTop: "0" }}>Admin Home</h1>
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
