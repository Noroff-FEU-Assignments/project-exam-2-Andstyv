import { ENQUIRIES_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";

export function AdminEnquiries() {
  const { data, loading, error } = useFetchData(ENQUIRIES_URL);
  const getEnquiries = data;

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

  const getEnquiriesData = getEnquiries.data;
  const sortedAccommodations = getEnquiriesData.sort((a, b) => b.id - a.id);

  return (
    <>
      <h1>Accommodation enquiries</h1>
      <p style={{ fontStyle: "italic" }}>(Most recent first)</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "400px" }}>
        {sortedAccommodations.map((enquiry) => {
          return (
            <div
              key={enquiry.id}
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "24px" }}>
                {enquiry.attributes.accommodation.data?.attributes?.title}
              </div>
              <div style={{ margin: "10px 0" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ minWidth: "60px", fontWeight: "bold" }}>Name:</div>
                  <div>{enquiry.attributes.name}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ minWidth: "60px", fontWeight: "bold" }}>Email:</div>
                  <div>{enquiry.attributes.email} </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ minWidth: "60px", fontWeight: "bold" }}>Tel:</div>
                  <div>{enquiry.attributes.telephone}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ minWidth: "60px", fontWeight: "bold" }}>Check in:</div>
                  <div>{enquiry.attributes.checkin} </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ minWidth: "60px", fontWeight: "bold" }}>Check out:</div>
                  <div>{enquiry.attributes.checkout}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                <div style={{ minWidth: "60px", fontWeight: "bold" }}>No. of guests:</div>
                <div>{enquiry.attributes.guests}</div>
              </div>
              <div>
                <div style={{ marginTop: "20px", fontWeight: "bold" }}>Message (optional):</div>
                <div style={{ fontStyle: "italic", marginTop: "5px" }}> {enquiry.attributes.message} </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
