import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AMENITIES_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";

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
      <div>
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
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="Title" id="title" {...register("title")} />
        {errors.title && <span id="acoommodation-form-error">{errors.title.message}</span>}
        <label htmlFor="description">Description: </label>
        <input type="text" placeholder="Description" id="description" {...register("description")} />
        {errors.description && <span id="acoommodation-form-error">{errors.description.message}</span>}
        <label htmlFor="price">Price: </label>
        <input type="number" placeholder="Price" id="price" {...register("price")} />
        {errors.price && <span id="acoommodation-form-error">{errors.price.message}</span>}
        <label htmlFor="type">Type: </label>
        <select placeholder="Type" id="type" {...register("type")}>
          <option value="Hotel">Hotel</option>
          <option value="Guesthouse">Guesthouse</option>
          <option value="BnB">BnB</option>
        </select>
        {errors.type && <span id="acoommodation-form-error">{errors.type.message}</span>}
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
        {errors.amenities && <span id="acoommodation-form-error">{errors.amenities.message}</span>}
        <label htmlFor="images">Images: </label>
        <input type="file" multiple name="images" id="images" onChange={(e) => setImages(e.target.files)}></input>

        <button type="submit">Create accommodation</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};
