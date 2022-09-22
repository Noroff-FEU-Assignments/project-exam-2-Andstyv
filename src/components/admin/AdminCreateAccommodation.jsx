import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AMENITIES_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const StyledCreateNewAccForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 400px;

  input {
    border: none;
    border-bottom: 1px solid #000;
    font-size: 16px;
    margin-bottom: 10px;
  }

  label {
    font-weight: bolder;
    margin-bottom: 10px;
  }
`;

const StyledAmenitiesLabels = styled.label`
  font-weight: 400 !important;
`;

const schema = yup.object().shape({
  title: yup.string().required("Enter title"),
  description: yup.string().required("Enter description"),
  price: yup.number().required("Enter price").typeError("Enter a number"),
  type: yup.string().required("Select type of accommodation"),
});

export const AdminCreateAccommodation = () => {
  //eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

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
      <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
        <BounceLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
  const formData = new FormData();

  const onSubmit = async (data, e) => {
    e.preventDefault();

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
      .then(function (response) {
        setMessage("Accommodation added successfully");
        console.log(response);
      })
      .catch(function (response) {
        alert("An error occured");
        console.log(response);
      });
    e.target.reset();
  };

  return (
    <div className="create-acc-container" style={{ border: "1px solid #000", borderRadius: "10px", marginBottom: "40px" }}>
      <StyledCreateNewAccForm onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" {...register("title")} />
          {errors.title && <span id="acoommodation-form-error">{errors.title.message}</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" {...register("description")} />
          {errors.description && <span id="acoommodation-form-error">{errors.description.message}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="price">Price: </label>
          <input type="number" id="price" {...register("price")} />
          {errors.price && <span id="acoommodation-form-error">{errors.price.message}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="type">Type: </label>
          <select id="type" {...register("type")}>
            <option value="Hotel">Hotel</option>
            <option value="Guesthouse">Guesthouse</option>
            <option value="BnB">BnB</option>
          </select>
          {errors.type && <span id="acoommodation-form-error">{errors.type.message}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
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
                  <StyledAmenitiesLabels htmlFor={amenity.id}>{amenity.attributes.Amenity}</StyledAmenitiesLabels>
                </div>
              );
            })}
          </div>
          {errors.amenities && <span id="acoommodation-form-error">{errors.amenities.message}</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <label htmlFor="images">Images: </label>
          <input
            type="file"
            multiple
            name="images"
            id="images"
            onChange={(e) => setImages(e.target.files)}
            style={{ borderBottom: "none", maxWidth: "200px" }}
          />
        </div>
        <button
          style={{
            marginTop: "30px",
            padding: "10px",
            background: "#",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#3b5053",
            color: "#ffda60",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Create accommodation
        </button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </StyledCreateNewAccForm>
    </div>
  );
};
