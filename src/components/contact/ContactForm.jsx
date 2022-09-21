import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { contactSchema as schema } from "../validation/schemas";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <label htmlFor="firstname">First Name</label>
      <input {...register("firstname")} id="firstname" />
      {errors.firstname && <span id="contact-error">{errors.firstname.message}</span>}
      <label htmlFor="lastname">Last Name</label>
      <input {...register("lastname")} id="lastname" />
      {errors.lastname && <span id="contact-error">{errors.lastname.message}</span>}
      <label htmlFor="email">Email</label>
      <input {...register("email")} id="email" />
      {errors.email && <span id="contact-error">{errors.email.message}</span>}
      <label htmlFor="message">Message</label>
      <textarea {...register("message")} id="message" />
      {errors.message && <span id="contact-error">{errors.message.message}</span>}
      <button>Send</button>
    </form>
  );
}
