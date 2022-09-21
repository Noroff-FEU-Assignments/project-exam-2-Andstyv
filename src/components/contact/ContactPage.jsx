import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { StyledContactWrapper } from "./contactWrapper.syles";

export function ContactPage() {
  return (
    <>
      <StyledContactWrapper>
        <ContactInfo />
        <ContactForm />
      </StyledContactWrapper>
    </>
  );
}
