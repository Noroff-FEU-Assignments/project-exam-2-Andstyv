import styled from "styled-components";
import errorImg from "../../../assets/img/error_bug_fix.svg";

const StyledErrorContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const StyledErrorText = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export function ErrorComponent({ error }) {
  return (
    <StyledErrorContainer>
      <p>Woops! Something went wrong: </p>
      <p style={{ color: "var(--color-warning)", marginTop: "20px" }}>{error.message}</p>
      <div style={{ marginTop: "25px" }}>
        <img src={errorImg} alt="Error illustration"></img>
      </div>
      <StyledErrorText>
        <p> Try again by reloading the page.</p>
        <p>
          If the error persists don't hesitate to reach out to us at <span style={{ fontWeight: "bold" }}> hello@holidaze.com</span>
        </p>
      </StyledErrorText>
    </StyledErrorContainer>
  );
}
