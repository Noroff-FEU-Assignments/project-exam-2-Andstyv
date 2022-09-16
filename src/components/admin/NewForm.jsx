import axios from "axios";
import React, { useState } from "react";
// import { AMENITIES_SEARCH_URL } from "../../constants/api";
// import { useFetchData } from "../../hooks/useFetchData";

export const NewForm = () => {
  //   const [formData, updateFormData] = useState({});

  //   const url = AMENITIES_SEARCH_URL;
  //   const { data, loading, error } = useFetchData(url);

  //   let amenities = data;

  //   if (loading) {
  //     return <div>Loading</div>;
  //   }

  //   if (error) {
  //     return <div>Error</div>;
  //   }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  //eslint-disable-next-line
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    // let data = [{ id: 4 }, { id: 5 }, { id: 6 }];
    let formBody = {
      data: { title: "Test New", description: "Test descr", price: 190, amenities: [{ id: 4 }, { id: 5 }] },
    };

    const formData = JSON.stringify(formBody);
    console.log(formData);

    axios({
      method: "post",
      url: "https://andsty-noroff-exam2.herokuapp.com/api/accommodations",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        alert("Form submitted successfully");
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
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={mobileNumber} placeholder="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};
