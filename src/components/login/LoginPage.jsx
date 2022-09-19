import { StyledPageWrapper } from "../home/HomeSection";
import Footer from "../layout/Footer";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <>
      <StyledPageWrapper>
        <LoginForm />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
