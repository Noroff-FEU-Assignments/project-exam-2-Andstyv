import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { StyledEnquiryBtn, StyledEnquiryModal, StyledEnquiryModalInput, StyledEnquiryModalOverlay } from "./enquiryModal.styles";
import { enquirySchema as schema } from "../validation/schemas";

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
      <StyledEnquiryBtn onClick={() => setShowModal(true)}>
        <div style={{ color: "yellow" }}>Enquire about this accommodation</div>
      </StyledEnquiryBtn>
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
                  <StyledEnquiryModalInput readOnly id="accommodation" value={amenity.location} />
                  <StyledEnquiryModalInput
                    {...register("accommodation")}
                    hidden
                    placeholder={amenity.location}
                    id={amenity.accommodationId}
                    readOnly
                    value={amenity.accommodationId}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="checkin">From</label>
                  <StyledEnquiryModalInput {...register("checkin")} id="checkin" readOnly value={amenity.fromDate} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="checkout">To</label>
                  <StyledEnquiryModalInput {...register("checkout")} id="checkout" readOnly value={amenity.toDate} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="guests">Guests</label>
                  <StyledEnquiryModalInput {...register("guests")} id="guests" readOnly value={amenity.guests} />
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
