import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  location: yup.string(),
  fromDate: yup.string(),
  toDate: yup.string(),
  guests: yup.string(),
  nights: yup.string(),
  firstname: yup.string().required("Enter first name"),
  lastname: yup.string().required("Enter last name"),
  email: yup.string().email().required("Enter E-mail"),
});

function EnquiryModal({ amenity }) {
  const [showModal, setShowModal] = useState(false);
  const [sentForm, setSentForm] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const formData = JSON.stringify({ data });
    console.log(formData);
    setSentForm(true);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Send enquiry</button>
      {showModal && (
        <>
          <div
            className="overlay"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "5",
              transform: "translateZ(0)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
            onClick={() => setShowModal(false)}
          ></div>
          <div
            className="modal"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              height: "auto",
              transform: "translate(-50%, -50%)",
              maxWidth: "250px",
              maxHeight: "450px",
              padding: "2.5em 1.5em 1.5em 1.5em",
              boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.1)",
              overflowY: "auto",
              backgroundColor: "#fff",
              zIndex: "99",
            }}
          >
            <button className="modal-close" type="button" onClick={() => setShowModal(false)}>
              X
            </button>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="location">Location</label>
                <input {...register("location")} id="location" readOnly value={amenity.location} style={{ fontStyle: "italic" }} />
                <label htmlFor="fromDate">From</label>
                <input {...register("fromDate")} id="fromDate" readOnly value={amenity.fromDate} style={{ fontStyle: "italic" }} />
                <label htmlFor="toDate">Till</label>
                <input {...register("toDate")} id="toDate" readOnly value={amenity.toDate} style={{ fontStyle: "italic" }} />
                <label htmlFor="guests">Guests</label>
                <input {...register("guests")} id="guests" readOnly value={amenity.guests} style={{ fontStyle: "italic" }} />
                <label htmlFor="nights">Nights</label>
                <input {...register("nights")} id="nights" readOnly value={amenity.days} style={{ fontStyle: "italic" }} />
                <label htmlFor="firstname">Firstname</label>
                <input {...register("firstname")} id="firstname" />
                {errors.firstname && <span id="contact-error">{errors.firstname.message}</span>}
                <label htmlFor="lastname">Lastname</label>
                <input {...register("lastname")} id="lastname" />
                {errors.lastname && <span id="contact-error">{errors.lastname.message}</span>}
                <label htmlFor="email">Email</label>
                <input {...register("email")} id="email" />
                {errors.email && <span id="contact-error">{errors.email.message}</span>}
                <div style={{ color: "green", margin: "10px 0" }}>{sentForm ? "Form submitted" : ""}</div>
                {sentForm ? <button disabled>Sent</button> : <button>Send</button>}

                {/* <button>Send</button> */}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EnquiryModal;
