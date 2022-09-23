import { ContactForm } from "../../components/forms/ContactForm";
import { ContactInfo } from "../../components/contact/ContactInfo";
import { StyledContactWrapper } from "../../components/contact/contactWrapper.syles";

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
