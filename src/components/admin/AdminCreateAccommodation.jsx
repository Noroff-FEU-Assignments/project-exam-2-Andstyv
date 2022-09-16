import { useForm } from "react-hook-form";
import { AMENITIES_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function AdminCreateAccommodation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const formData = data;
    console.log(formData);
  };

  const url = AMENITIES_SEARCH_URL;
  const { data, loading, error } = useFetchData(url);

  let amenities = data;

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(amenities);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <label htmlFor="title">Title</label>
      <input {...register("title")} id="title" />
      {errors.title && <span id="contact-error">{errors.title.message}</span>}
      <label htmlFor="description">Description</label>
      <input {...register("description")} id="description" />
      {errors.description && <span id="contact-error">{errors.description.message}</span>}
      <label htmlFor="price">Price per room</label>
      <input {...register("price")} id="price" />
      {errors.price && <span id="contact-error">{errors.price.message}</span>}
      <label htmlFor="type">Type</label>
      <input {...register("type")} id="type" />
      {errors.type && <span id="contact-error">{errors.type.message}</span>}

      <div>Amenities: </div>
      {amenities.data.map((amenity) => {
        return (
          <div key={amenity.id}>
            <input type={"checkbox"} id={amenity.id} {...register("amenities")} value={amenity.id} />
            <label htmlFor={amenity.id}>{amenity.attributes.Amenity}</label>
          </div>
        );
      })}
      <button>Send</button>
    </form>
  );
}

// Amenities (icons + links), main-image (main + rest), type

/* <label htmlFor="main-image">Main image</label>
<input {...register("main-image")} id="secondary-images" type={"file"} />
<label htmlFor="secondary-images">Secondary images</label>
<input {...register("secondary-images")} id="secondary-images" type={"file"} multiple /> */
