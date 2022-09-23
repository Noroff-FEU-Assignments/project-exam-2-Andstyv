import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import { contactSchema as schema } from "../utils/validation/schemas";
import { StyledContactFormContainer, StyledContactFormInput, StyledLoginFieldset } from "./forms.styles";
import { useState } from "react";
import { SubmitFormBtn } from "../buttons/SubmitFormBtn";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    setSubmitting(true);
    const formData = JSON.stringify({ data });

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/contact-form-messages",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        setSubmitting(false);
        setSubmitForm(true);
      })
      .catch(function (response) {
        setSubmitError(response.message);
        setSubmitting(false);
      });
    e.target.reset();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Contact us:</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <StyledLoginFieldset style={{ boxShadow: "none", width: "100%" }} disabled={submitting}>
          <StyledContactFormContainer>
            <label htmlFor="firstname" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              First Name
            </label>
            <StyledContactFormInput {...register("firstname")} id="firstname" placeholder="John" />
            {errors.firstname && (
              <div id="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.firstname.message}
              </div>
            )}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="lastname" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              Last Name
            </label>
            <StyledContactFormInput {...register("lastname")} id="lastname" placeholder="Doe" />
            {errors.lastname && (
              <div id="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.lastname.message}
              </div>
            )}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="email" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              Email
            </label>
            <StyledContactFormInput {...register("email")} id="email" placeholder="john.doe@mail.com" />
            {errors.email && (
              <div id="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.email.message}
              </div>
            )}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="message" style={{ fontWeight: "bold", paddingLeft: "2px", paddingBottom: "5px" }}>
              Message
            </label>
            <textarea {...register("message")} id="message" style={{ minHeight: "100px", fontSize: "16px" }} />
            {errors.message && (
              <div id="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.message.message}
              </div>
            )}
          </StyledContactFormContainer>
          <SubmitFormBtn>{submitting ? "Sending" : "Send"}</SubmitFormBtn>
          <div style={{ textAlign: "center", marginTop: "10px", color: "darkgreen" }}>{submitForm ? "Sent successfully" : ""}</div>
          <div style={{ textAlign: "center", marginTop: "10px", color: "red" }}>{submitError ? `Error: ${submitError}` : ""}</div>
        </StyledLoginFieldset>
      </form>
    </div>
  );
}
