import { StyledPageWrapper } from "../home/homeSection.styles";

import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <>
      <StyledPageWrapper style={{ height: "80vh" }}>
        <LoginForm />
      </StyledPageWrapper>
    </>
  );
}
