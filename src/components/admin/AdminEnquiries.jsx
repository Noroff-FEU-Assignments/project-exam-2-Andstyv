import { ENQUIRIES_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { BounceLoader } from "react-spinners";
import {
  StyledAdmindEnquiry,
  StyledAdmindEnquiryContainer,
  StyledAdminEnquiriesContainer,
  StyledAdminEnquiryContactInfoContainer,
  StyledAdminEnquiryLabel,
  StyledAdminEnquiryTitle,
} from "./adminEnquiries.styles";
import { StyledBounceLoaderContainer } from "./adminContactMessages.styles";
import { ErrorComponent } from "../layout/error/ErrorComponent";

export function AdminEnquiries() {
  const { data, loading, error } = useFetchData(ENQUIRIES_URL);
  const getEnquiries = data;

  if (loading) {
    return (
      <StyledBounceLoaderContainer>
        <BounceLoader />
      </StyledBounceLoaderContainer>
    );
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const getEnquiriesData = getEnquiries.data;
  const sortedAccommodations = getEnquiriesData.sort((a, b) => b.id - a.id);

  return (
    <>
      <h2>Accommodation enquiries</h2>
      <p style={{ fontStyle: "italic" }}>(Most recent first)</p>
      <StyledAdminEnquiriesContainer>
        {sortedAccommodations.map((enquiry) => {
          return (
            <StyledAdmindEnquiry key={enquiry.id}>
              <StyledAdminEnquiryTitle>{enquiry.attributes.accommodation.data?.attributes?.title}</StyledAdminEnquiryTitle>
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
