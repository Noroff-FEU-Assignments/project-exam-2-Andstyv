import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MESSAGE_FORM_URL } from "../../constants/api";
import { getAuth } from "../../constants/getAuth";
import { useFetchData } from "../../hooks/useFetchData";

export function AdminPage() {
  const history = useNavigate();
  const auth = getAuth();
  const getMessages = useFetchData(MESSAGE_FORM_URL);

  console.log(getMessages);

  useEffect(() => {
    if (!auth) {
      history("/");
    }
  });

  return getMessages.loading ? (
    <div>Loading</div>
  ) : (
    <>
      <h1>This is admin page</h1>
      <button>Show messages</button>
      <button>Show enquiries</button>
      <button>Add accommodation</button>
      <Link to="messages">messages</Link>
      <Outlet />
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
