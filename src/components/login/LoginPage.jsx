import { StyledPageWrapper } from "../home/HomeSection";
import Footer from "../layout/Footer";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <>
      <StyledPageWrapper style={{ height: "80vh" }}>
        <LoginForm />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
