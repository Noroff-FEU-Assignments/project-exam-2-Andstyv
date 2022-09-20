import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";

const StyledEnquiryModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  max-width: 300px;
  max-height: 600px;
  padding: 20px 40px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflowy: auto;
  background-color: #fff;
  z-index: 99;
  border-radius: 20px;

  input {
    font-size: 16px;
  }
  button {
    margin: 20px 0;
  }
`;

const StyledEnquiryModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  zindex: 5;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.8);
`;

const schema = yup.object().shape({
  accommodation: yup.string(),
  checkin: yup.date(),
  checkout: yup.date(),
  guests: yup.number(),
  name: yup.string().required("Enter name"),
  email: yup.string().email().required("Enter Email").typeError("Enter valid Email"),
  telephone: yup.number().required("Enter telephone no.").typeError("Enter a valid number"),
  message: yup.string(),
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
          <StyledEnquiryModalOverlay onClick={() => setShowModal(false)}></StyledEnquiryModalOverlay>
          <StyledEnquiryModal>
            <button className="modal-close" type="button" onClick={() => setShowModal(false)}>
              X
            </button>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {" "}
                  <label htmlFor="accommodation">Accommodation</label>
                  <input
                    readOnly
                    id="accommodation"
                    value={amenity.location}
                    style={{ fontStyle: "italic", border: "none", borderBottom: "1px solid #000", borderRadius: "0px,", marginTop: "5px" }}
                  />
                  <input
                    {...register("accommodation")}
                    hidden
                    placeholder={amenity.location}
                    id={amenity.accommodationId}
                    readOnly
                    value={amenity.accommodationId}
                    style={{ fontStyle: "italic", border: "none", borderBottom: "1px solid #000", borderRadius: "0px,", marginTop: "5px" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="checkin">From</label>
                  <input
                    {...register("checkin")}
                    id="checkin"
                    readOnly
                    value={amenity.fromDate}
                    style={{ fontStyle: "italic", border: "none", borderBottom: "1px solid #000", borderRadius: "0px,", marginTop: "5px" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="checkout">To</label>
                  <input
                    {...register("checkout")}
                    id="checkout"
                    readOnly
                    value={amenity.toDate}
                    style={{ fontStyle: "italic", border: "none", borderBottom: "1px solid #000", borderRadius: "0px,", marginTop: "5px" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="guests">Guests</label>
                  <input
                    {...register("guests")}
                    id="guests"
                    readOnly
                    value={amenity.guests}
                    style={{ fontStyle: "italic", border: "none", borderBottom: "1px solid #000", borderRadius: "0px,", marginTop: "5px" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                  <label htmlFor="name">Name</label>
                  <input {...register("name")} id="name" />
                  {errors.name && <span id="contact-error">{errors.name.message}</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {" "}
                  <label htmlFor="email">Email</label>
                  <input {...register("email")} id="email" />
                  {errors.email && <span id="contact-error">{errors.email.message}</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {" "}
                  <label htmlFor="telephone">Telephone</label>
                  <input {...register("telephone")} id="telephone" type="number" />
                  {errors.telephone && <span id="contact-error">{errors.telephone.message}</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="message">Message (optional)</label>
                  <textarea {...register("message")} id="message" style={{ minHeight: "50px" }} />
                  {errors.message && <span id="contact-error">{errors.message.message}</span>}
                </div>
                <div style={{ color: "green", margin: "10px 0" }}>{sentForm ? "Form submitted" : ""}</div>

                <button>Send</button>
              </form>
            </div>
          </StyledEnquiryModal>
        </>
      )}
    </>
  );
}

export default EnquiryModal;
