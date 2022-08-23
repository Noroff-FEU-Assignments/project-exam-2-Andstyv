import { useFetchData } from "../../hooks/useFetchData";
import { ContactForm } from "./ContactForm";

const url = "https://webapi.no/api/v1/zipcosde/0565";

export function ContactPage() {
  useFetchData(url);
  return (
    <>
      <div>Contact page</div>
      <ContactForm />
    </>
  );
}
