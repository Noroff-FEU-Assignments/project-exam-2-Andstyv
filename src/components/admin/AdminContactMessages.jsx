import React from "react";
import { MESSAGE_FORM_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function AdminContactMessages() {
  const { data, loading, error } = useFetchData(MESSAGE_FORM_URL);
  const getMessages = data;

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const getMessagesData = getMessages.data;
  let sortedMessages = getMessagesData.sort((a, b) => b.id - a.id);

  return (
    <>
      <h1>Contact messages</h1>
      <p>(Most recent first)</p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {sortedMessages.map((message) => {
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
