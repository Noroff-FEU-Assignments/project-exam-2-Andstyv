import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { contactSchema as schema } from "../validation/schemas";
import styled from "styled-components";

const StyledContactFormInput = styled.input`
  border: none;
  border-bottom: 1px solid #333;
  margin-top: 10px;
  font-size: 16px;
`;

const StyledContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    const formData = JSON.stringify({ data });

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/contact-form-messages",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        alert("Form submitted successfully");
        console.log(response);
      })
      .catch(function (response) {
        alert("An error occured");
        console.log(response);
      });
    e.target.reset();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Contact us:</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <StyledContactFormContainer>
            <label htmlFor="firstname" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              First Name
            </label>
            <StyledContactFormInput {...register("firstname")} id="firstname" placeholder="John" />
            {errors.firstname && <span id="contact-error">{errors.firstname.message}</span>}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="lastname" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              Last Name
            </label>
            <StyledContactFormInput {...register("lastname")} id="lastname" placeholder="Doe" />
            {errors.lastname && <span id="contact-error">{errors.lastname.message}</span>}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="email" style={{ fontWeight: "bold", paddingLeft: "2px" }}>
              Email
            </label>
            <StyledContactFormInput {...register("email")} id="email" placeholder="john.doe@mail.com" />
            {errors.email && <span id="contact-error">{errors.email.message}</span>}
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <label htmlFor="message" style={{ fontWeight: "bold", paddingLeft: "2px", paddingBottom: "5px" }}>
              Message
            </label>
            <textarea {...register("message")} id="message" style={{ minHeight: "100px" }} />
            {errors.message && <span id="contact-error">{errors.message.message}</span>}
          </StyledContactFormContainer>
          <button
            style={{
              marginTop: "30px",
              padding: "10px",
              background: "#",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#3b5053",
              color: "#ffda60",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
