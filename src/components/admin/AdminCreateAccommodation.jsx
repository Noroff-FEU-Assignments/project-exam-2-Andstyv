import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AMENITIES_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { StyledLoginFieldset } from "../forms/forms.styles";
import { adminCreateAccommodationSchema as schema } from "../utils/validation/schemas";
import { SubmitFormBtn } from "../buttons/SubmitFormBtn";
import { StyledBounceLoaderContainer } from "./adminContactMessages.styles";

const StyledCreateAccommodationColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || "10px"};
`;

export const AdminCreateAccommodation = () => {
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const url = AMENITIES_SEARCH_URL;
  const { data, loading, error } = useFetchData(url);

  let amenities = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (loading) {
    return (
      <StyledBounceLoaderContainer>
        <BounceLoader />
      </StyledBounceLoaderContainer>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const formData = new FormData();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setSubmitting(true);

    const newFormData = {
      title: data.title,
      description: data.description,
      price: data.price,
      amenities: data.amenities,
      type: data.type,
    };

    for (const image of images) {
      formData.append(`files.images`, image, image.name);
    }
    formData.append("data", JSON.stringify(newFormData));

    setMessage("Loading");

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/accommodations/?populate[amenities][populate]=*&populate[images]=*",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        setMessage("Accommodation added successfully");
        setSubmitting(false);
      })
      .catch(function (response) {
        setMessage(response.message);
      });
    e.target.reset();
  };

  return (
    <div className="create-acc-container" style={{ borderRadius: "10px", marginBottom: "40px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLoginFieldset disabled={submitting}>
          <StyledCreateAccommodationColumn marginTop={"0"}>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" {...register("title")} />
            {errors.title && (
              <span id="form-error">
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.title.message}
                </div>
              </span>
            )}
          </StyledCreateAccommodationColumn>

          <StyledCreateAccommodationColumn>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" {...register("description")} />
            {errors.description && (
              <span id="form-error">
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.description.message}
                </div>
              </span>
            )}
          </StyledCreateAccommodationColumn>
          <StyledCreateAccommodationColumn>
            <label htmlFor="price">Price per room: </label>
            <input type="number" id="price" {...register("price")} />
            {errors.price && (
              <span id="form-error">
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.price.message}
                </div>
              </span>
            )}
          </StyledCreateAccommodationColumn>
          <StyledCreateAccommodationColumn>
            <label htmlFor="type">Type: </label>
            <select id="type" {...register("type")} style={{ marginTop: "10px" }}>
              <option value="Hotel">Hotel</option>
              <option value="Guesthouse">Guesthouse</option>
              <option value="BnB">BnB</option>
            </select>
            {errors.type && (
              <span id="form-error">
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.type.message}
                </div>
              </span>
            )}
          </StyledCreateAccommodationColumn>
          <StyledCreateAccommodationColumn>
            <label htmlFor="amenities">Amenities: </label>
            <div>
              {amenities.data.map((amenity) => {
                return (
                  <div key={amenity.id}>
                    <input
                      type={"checkbox"}
                      name={amenity.attributes.Amenity}
                      id={amenity.attributes.Amenity}
                      {...register("amenities")}
                      value={amenity.id}
                    />
                    <label htmlFor={amenity.id}>{amenity.attributes.Amenity}</label>
                  </div>
                );
              })}
            </div>
            {errors.amenities && (
              <span id="form-error">
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.amenities.message}
                </div>
              </span>
            )}
          </StyledCreateAccommodationColumn>

          <StyledCreateAccommodationColumn>
            <label htmlFor="images">Images: </label>
            <input
              type="file"
              multiple
              name="images"
              id="images"
              onChange={(e) => setImages(e.target.files)}
              style={{ borderBottom: "none", maxWidth: "200px", cursor: "pointer" }}
            />
          </StyledCreateAccommodationColumn>
          <SubmitFormBtn>{submitting ? "Creating..." : "Create Accommodation"}</SubmitFormBtn>

          <div className="message" style={{ textAlign: "center" }}>
            {message ? <p>{message}</p> : null}
          </div>
        </StyledLoginFieldset>
      </form>
    </div>
  );
};
