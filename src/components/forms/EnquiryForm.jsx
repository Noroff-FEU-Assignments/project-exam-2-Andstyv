import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { enquirySchema as schema } from "../utils/validation/schemas";
import { StyledLoginFieldset } from "../forms/forms.styles";
import { SubmitFormBtn } from "../buttons/SubmitFormBtn";
import { StyledEnquiryModalInput } from "../modals/enquiryModal.styles";
import { dateConverter } from "../utils/converters/dateConverter";

export function EnquiryForm({ accommodation }) {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  let { parsedCheckIn, parsedCheckOut } = dateConverter(accommodation);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledLoginFieldset style={{ boxShadow: "none", padding: "5px" }} disabled={submitting}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="accommodation">Accommodation</label>
          <StyledEnquiryModalInput readOnly id="accommodation" value={accommodation.location} />
          <StyledEnquiryModalInput
            {...register("accommodation")}
            hidden
            placeholder={accommodation.location}
            id={accommodation.accommodationId}
            readOnly
            value={accommodation.accommodationId}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="checkin">From</label>
          <StyledEnquiryModalInput {...register("checkin")} id="checkin" hidden readOnly value={accommodation.fromDate} />
          <StyledEnquiryModalInput readOnly value={parsedCheckIn} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="checkout">To</label>
          <StyledEnquiryModalInput {...register("checkout")} id="checkout" hidden eadOnly value={accommodation.toDate} />
          <StyledEnquiryModalInput readOnly value={parsedCheckOut} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="guests">Guests</label>
          <StyledEnquiryModalInput {...register("guests")} id="guests" readOnly value={accommodation.guests} />
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

        <SubmitFormBtn> {submitting ? "Sending..." : "Send Enquiry"}</SubmitFormBtn>
      </StyledLoginFieldset>
    </form>
  );
}
