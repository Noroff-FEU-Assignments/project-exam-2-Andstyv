import React from "react";
import { MESSAGE_FORM_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function AdminContactMessages() {
  const getMessages = useFetchData(MESSAGE_FORM_URL);

  console.log(getMessages);

  return getMessages.loading ? (
    <div>Loading</div>
  ) : (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {getMessages &&
          getMessages.data.data.map((message) => {
            return (
              <div key={message.id} style={{ border: "1px solid black", padding: "10px", width: "250px", marginBottom: "20px" }}>
                <h2>Message:</h2>
                <div> {message.attributes.firstname} </div>
                <div> {message.attributes.lastname} </div>
                <div> {message.attributes.email} </div>
                <div> {message.attributes.message} </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
