import React from "react";
import { MESSAGE_FORM_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";
import {
  StyledAdminContactMsgContainer,
  StyledAdminContactMsgContainerDate,
  StyledAdminContactMsgContainerMessage,
  StyledAdminContactMsgContainerMsg,
  StyledAdminContactMsgContainerNames,
  StyledAdminContactMsgH1,
  StyledAdminContactMsgP,
} from "./adminContactMessages.styles";

export function AdminContactMessages() {
  const { data, loading, error } = useFetchData(MESSAGE_FORM_URL);
  const getMessages = data;

  if (loading) {
    return (
      <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
        <BounceLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function convertDate(date) {
    const newDate = new Date(date);
    return (date = newDate.toLocaleDateString());
  }

  const getMessagesData = getMessages.data;
  let sortedMessages = getMessagesData.sort((a, b) => b.id - a.id);

  return (
    <>
      <StyledAdminContactMsgH1>Contact messages</StyledAdminContactMsgH1>
      <StyledAdminContactMsgP>(Most recent first)</StyledAdminContactMsgP>
      <StyledAdminContactMsgContainer>
        {sortedMessages.map((message) => {
          return (
            <StyledAdminContactMsgContainerMsg key={message.id}>
              <StyledAdminContactMsgContainerDate>{convertDate(message.attributes.createdAt)}</StyledAdminContactMsgContainerDate>
              <StyledAdminContactMsgContainerNames>
                <div> {message.attributes.firstname} </div>
                <div> {message.attributes.lastname} </div>
              </StyledAdminContactMsgContainerNames>
              <div> {message.attributes.email} </div>
              <StyledAdminContactMsgContainerMessage> {message.attributes.message} </StyledAdminContactMsgContainerMessage>
            </StyledAdminContactMsgContainerMsg>
          );
        })}
      </StyledAdminContactMsgContainer>
    </>
  );
}
