import { useFetchData } from "../../hooks/useFetchData";
import EnquiryModal from "../elements/EnquiryModal";
import { ContactForm } from "./ContactForm";

const url = "https://webapi.no/api/v1/zipcode/0565";

export function ContactPage() {
  useFetchData(url);
  return (
    <>
      <div>Contact page</div>
      <ContactForm />
      <EnquiryModal />
    </>
  );
}
