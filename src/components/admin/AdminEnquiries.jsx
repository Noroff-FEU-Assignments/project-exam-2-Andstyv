import { ENQUIRIES_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";

export function AdminEnquiries() {
  const { data, loading, error } = useFetchData(ENQUIRIES_URL);
  const getEnquiries = data;

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {getEnquiries.data.map((enquiry) => {
          return (
            <div key={enquiry.id} style={{ border: "1px solid black", padding: "10px", width: "250px", marginBottom: "20px" }}>
              <h2>enquiry:</h2>
              <div>{enquiry.attributes.accommodation.data?.attributes?.title}</div>
              <div> {enquiry.attributes.name} </div>
              <div> {enquiry.attributes.email} </div>
              <div> {enquiry.attributes.telephone} </div>
              <div> {enquiry.attributes.guests} </div>
              <div> {enquiry.attributes.checkin} </div>
              <div> {enquiry.attributes.checkout} </div>
              <div> {enquiry.attributes.message} </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
