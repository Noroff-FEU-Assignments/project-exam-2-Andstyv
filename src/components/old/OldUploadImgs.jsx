import { useState } from "react";
import axios from "axios";

export function UploadImgs() {
  const [files, setFiles] = useState();

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(files[0]);

    formData.append("files", files[0]);
    formData.append("refId", 12);
    formData.append("ref", "api::accommodation.accommodation");
    formData.append("field", "images");

    axios
      .post("https://andsty-noroff-exam2.herokuapp.com/api/upload", formData)
      .then((response) => {
        console.log(formData);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={uploadImage}>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <input type="submit" value="not use" />
    </form>
  );
}
