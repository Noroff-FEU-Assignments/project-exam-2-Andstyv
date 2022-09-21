import * as yup from "yup";

export const contactSchema = yup.object().shape({
  firstname: yup.string().required("Enter first name"),
  lastname: yup.string().required("Enter last name"),
  email: yup.string().email().required("Enter email"),
  message: yup.string().required("Enter message").min(10, "Must containt at least 10 characters"),
});

export const enquirySchema = yup.object().shape({
  accommodation: yup.string(),
  checkin: yup.date(),
  checkout: yup.date(),
  guests: yup.number(),
  name: yup.string().required("Enter name"),
  email: yup.string().email().required("Enter Email").typeError("Enter valid Email"),
  telephone: yup.number().required("Enter telephone no.").typeError("Enter a valid number"),
  message: yup.string(),
});

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter identifier"),
  password: yup.string().required("Please enter password"),
});
