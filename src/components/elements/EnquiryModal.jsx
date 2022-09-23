import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { StyledEnquiryBtn, StyledEnquiryModal, StyledEnquiryModalInput, StyledEnquiryModalOverlay } from "./enquiryModal.styles";
import { enquirySchema as schema } from "../validation/schemas";
import { StyledLoginFieldset } from "../forms/forms.styles";

function EnquiryModal({ amenity }) {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checkIn = new Date(amenity.fromDate);
  const checkOut = new Date(amenity.toDate);

  const parsedCheckIn = checkIn.toLocaleDateString();
  const parsedCheckOut = checkOut.toLocaleDateString();

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
    setSubmitting(true);

    const formData = JSON.stringify({ data });

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/enquiries?populate[accommodation]=*",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        setMessage("Enquiry sent successfully");
      })
      .catch(function (response) {
        setMessage(response.message);
      });
    e.target.reset();
    setSubmitting(false);
  };

  return (
    <>
      <StyledEnquiryBtn onClick={() => setShowModal(true)}>
        <div style={{ color: "#ffda60", fontWeight: "bold" }}>Enquire about this accommodation</div>
      </StyledEnquiryBtn>
      {showModal && (
        <>
          <StyledEnquiryModalOverlay onClick={() => setShowModal(false)}></StyledEnquiryModalOverlay>
          <StyledEnquiryModal>
            <StyledEnquiryBtn className="modal-close" type="button" onClick={() => setShowModal(false)}>
              Close
            </StyledEnquiryBtn>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <StyledLoginFieldset style={{ boxShadow: "none", padding: "5px" }} disabled={submitting}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
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
                    <StyledEnquiryModalInput {...register("checkin")} id="checkin" hidden readOnly value={amenity.fromDate} />
                    <StyledEnquiryModalInput readOnly value={parsedCheckIn} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="checkout">To</label>
                    <StyledEnquiryModalInput {...register("checkout")} id="checkout" hidden eadOnly value={amenity.toDate} />
                    <StyledEnquiryModalInput readOnly value={parsedCheckOut} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="guests">Guests</label>
                    <StyledEnquiryModalInput {...register("guests")} id="guests" readOnly value={amenity.guests} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                    <label htmlFor="name">Name</label>
                    <input {...register("name")} id="name" />
                    {errors.name && (
                      <div id="form-error">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} id="email" />
                    {errors.email && (
                      <div id="form-error">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="telephone">Telephone</label>
                    <input {...register("telephone")} id="telephone" type="number" />
                    {errors.telephone && (
                      <div id="form-error">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.telephone.message}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="message">Message (optional)</label>
                    <textarea {...register("message")} id="message" style={{ minHeight: "70px" }} />
                    {errors.message && <span id="form-error">{errors.message.message}</span>}
                  </div>
                  <div className="message" style={{ textAlign: "center" }}>
                    {message ? <p>{message}</p> : null}
                  </div>

                  <button> {submitting ? "Sending..." : "Send Enquiry"}</button>
                </StyledLoginFieldset>
              </form>
            </div>
          </StyledEnquiryModal>
        </>
      )}
    </>
  );
}

export default EnquiryModal;
