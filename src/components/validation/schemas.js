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

const today = new Date();
today.setHours(0, 0, 0, 0);

export const searchSchema = yup.object().shape({
  location: yup.string().required("Enter location"),
  fromDate: yup.date().min(today, "Date cannot be in the past").required("Enter from date").typeError("Enter from date"),
  toDate: yup.date().required().min(yup.ref("fromDate"), "To date cannot be before start date").typeError("Enter to date"),
  guests: yup.number().min(1, "Must be at least 1 guest").required("Enter no. of guests").typeError("Enter no. of guests"),
});

export const adminCreateAccommodationSchema = yup.object().shape({
  title: yup.string().required("Enter title"),
  description: yup.string().required("Enter description"),
  price: yup.number().required("Enter price").typeError("Enter a number"),
  type: yup.string().required("Select type of accommodation"),
  amenities: yup.array().min(1, "Select at least one amenity").of(yup.string().required()).required().typeError("Select at least one amenity"),
});
