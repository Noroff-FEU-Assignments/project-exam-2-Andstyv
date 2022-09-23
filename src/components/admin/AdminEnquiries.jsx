import { ENQUIRIES_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";
import {
  StyledAdmindEnquiry,
  StyledAdmindEnquiryContainer,
  StyledAdminEnquiriesContainer,
  StyledAdminEnquiryContactInfoContainer,
  StyledAdminEnquiryLabel,
} from "./adminEnquiries.styles";

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

      <StyledAdminEnquiriesContainer>
        {sortedAccommodations.map((enquiry) => {
          return (
            <StyledAdmindEnquiry key={enquiry.id}>
              <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "24px" }}>
                {enquiry.attributes.accommodation.data?.attributes?.title}
              </div>
              <StyledAdminEnquiryContactInfoContainer>
                <StyledAdmindEnquiryContainer>
                  <StyledAdminEnquiryLabel>Name:</StyledAdminEnquiryLabel>
                  <div>{enquiry.attributes.name}</div>
                </StyledAdmindEnquiryContainer>
                <StyledAdmindEnquiryContainer>
                  <StyledAdminEnquiryLabel>Email:</StyledAdminEnquiryLabel>
                  <div>{enquiry.attributes.email} </div>
                </StyledAdmindEnquiryContainer>
                <StyledAdmindEnquiryContainer>
                  <StyledAdminEnquiryLabel>Tel:</StyledAdminEnquiryLabel>
                  <div>{enquiry.attributes.telephone}</div>
                </StyledAdmindEnquiryContainer>
              </StyledAdminEnquiryContactInfoContainer>
              <div style={{ display: "flex", gap: "20px" }}>
                <StyledAdmindEnquiryContainer flexDirection="column">
                  <StyledAdminEnquiryLabel>Check in:</StyledAdminEnquiryLabel>
                  <div>{enquiry.attributes.checkin} </div>
                </StyledAdmindEnquiryContainer>
                <StyledAdmindEnquiryContainer flexDirection="column">
                  <StyledAdminEnquiryLabel> Check out:</StyledAdminEnquiryLabel>
                  <div>{enquiry.attributes.checkout}</div>
                </StyledAdmindEnquiryContainer>
              </div>
              <StyledAdmindEnquiryContainer flexDirection="column" marginTop="10px">
                <StyledAdminEnquiryLabel>No. of guests:</StyledAdminEnquiryLabel>
                <div>{enquiry.attributes.guests}</div>
              </StyledAdmindEnquiryContainer>
              <div>
                <StyledAdminEnquiryLabel marginTop="20px">Message (optional):</StyledAdminEnquiryLabel>
                <div style={{ fontStyle: "italic", marginTop: "5px" }}> {enquiry.attributes.message} </div>
              </div>
            </StyledAdmindEnquiry>
          );
        })}
      </StyledAdminEnquiriesContainer>
    </>
  );
}
