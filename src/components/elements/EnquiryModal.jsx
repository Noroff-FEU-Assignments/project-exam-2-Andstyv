import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = yup.object().shape({
  accommodation: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  telephone: yup.number(),
  checkin: yup.date(),
  checkout: yup.date(),
  guests: yup.number(),
});

function EnquiryModal({ amenity }) {
  const [showModal, setShowModal] = useState(false);
  const [sentForm, setSentForm] = useState(false);
  console.log(amenity);

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

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/enquiries?populate[accommodation]=*",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        alert("An error occured");
        console.log(response);
      });
    e.target.reset();
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        style={{
          gridRow: "2",
          gridColumn: "1/5",
          background: "#3b5053",
          borderRadius: "0 0 7.5px 7.5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "yellow" }}>Enquire about this accommodation</div>
      </div>
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
                <label htmlFor="accommodation">accommodation</label>
                <input readOnly id="accommodation" value={amenity.location} />
                <input
                  {...register("accommodation")}
                  hidden
                  placeholder={amenity.location}
                  id={amenity.accommodationId}
                  readOnly
                  value={amenity.accommodationId}
                  style={{ fontStyle: "italic" }}
                />
                <label htmlFor="checkin">From</label>
                <input {...register("checkin")} id="checkin" readOnly value={amenity.fromDate} style={{ fontStyle: "italic" }} />
                <label htmlFor="checkout">Till</label>
                <input {...register("checkout")} id="checkout" readOnly value={amenity.toDate} style={{ fontStyle: "italic" }} />
                <label htmlFor="guests">Guests</label>
                <input {...register("guests")} id="guests" readOnly value={amenity.guests} style={{ fontStyle: "italic" }} />
                <label htmlFor="name">Name</label>
                <input {...register("name")} id="name" />
                {errors.name && <span id="contact-error">{errors.name.message}</span>}
                <label htmlFor="email">Email</label>
                <input {...register("email")} id="email" />
                {errors.email && <span id="contact-error">{errors.email.message}</span>}
                <label htmlFor="tel">Telephone</label>
                <input {...register("telephone")} id="tel" type="number" />
                {errors.tel && <span id="contact-error">{errors.tel.message}</span>}
                <label htmlFor="message">Message</label>
                <textarea {...register("message")} id="message" />
                {errors.message && <span id="contact-error">{errors.message.message}</span>}
                <div style={{ color: "green", margin: "10px 0" }}>{sentForm ? "Form submitted" : ""}</div>

                <button>Send</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EnquiryModal;
