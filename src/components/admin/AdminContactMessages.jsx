import React from "react";
import { MESSAGE_FORM_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";

export function AdminContactMessages() {
  const { data, loading, error } = useFetchData(MESSAGE_FORM_URL);
  const getMessages = data;

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

  function convertDate(date) {
    const newDate = new Date(date);
    return (date = newDate.toLocaleDateString());
  }

  const getMessagesData = getMessages.data;
  let sortedMessages = getMessagesData.sort((a, b) => b.id - a.id);
  console.log(sortedMessages);

  return (
    <>
      <h1 style={{ margin: "10px 0 5px 0" }}>Contact messages</h1>
      <p style={{ margin: "0px 0 10px 0", fontStyle: "italic" }}>(Most recent first)</p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {sortedMessages.map((message) => {
          return (
            <div
              key={message.id}
              style={{
                borderRadius: "10px",
                padding: "10px",
                width: "250px",
                marginBottom: "20px",
                boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div style={{ fontStyle: "italic", marginBottom: "10px" }}>{convertDate(message.attributes.createdAt)}</div>
              <div style={{ display: "flex", gap: "5px" }}>
                <div> {message.attributes.firstname} </div>
                <div> {message.attributes.lastname} </div>
              </div>
              <div> {message.attributes.email} </div>
              <div style={{ marginTop: "20px", fontStyle: "italic" }}> {message.attributes.message} </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
