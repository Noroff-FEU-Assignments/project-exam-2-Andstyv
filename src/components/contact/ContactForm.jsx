import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  firstName: yup.string().required("Enter first name"),
  lastName: yup.string().required("Enter last name"),
  email: yup.string().email().required("Enter email"),
  message: yup.string().required("Enter message").min(10, "Must containt at least 10 characters"),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData, e) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <label htmlFor="firstName">First Name</label>
      <input {...register("firstName")} id="firstName" />
      {errors.firstName && <span id="contact-error">{errors.firstName.message}</span>}
      <label htmlFor="lastName">Last Name</label>
      <input {...register("lastName")} id="lastName" />
      {errors.lastName && <span id="contact-error">{errors.lastName.message}</span>}
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
