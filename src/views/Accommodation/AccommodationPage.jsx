import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ACCOMMODATIONS_SEARCH_URL } from "../../constants/api";
import { useFetchData } from "../../hooks/useFetchData";
import { SkeletonAccommodation } from "../../components/accommodations/SkeletonAccommodation";
import { AccommodationImageCarousel } from "../../components/accommodations/AccommodationImageCarousel";
import { AccommodationInfoContainer } from "../../components/accommodations/AcommodationInfoContainer";

const StyledAccommodationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledAccommodationWrapper = styled.div`
  margin: 50px 20px 0 20px;
  max-width: 900px;
`;

export function AccommodationPage() {
  const { id } = useParams();
  const populateApi = "?populate[amenities][populate]=*&populate[images]=*";
  const url = ACCOMMODATIONS_SEARCH_URL + id + populateApi;
  const { data, loading, error } = useFetchData(url);

  const accommodation = data;

  if (loading) {
    return <SkeletonAccommodation />;
  }

  if (error) {
    return <div style={{ marginTop: "100px" }}>Error: {error}</div>;
  }

  return (
    <StyledAccommodationWrapper>
      <StyledAccommodationContainer>
        <div>
          <AccommodationImageCarousel key={accommodation.data.id} accommodationImages={accommodation.data.attributes.images.data} />
        </div>
        <AccommodationInfoContainer accommodation={accommodation} />
      </StyledAccommodationContainer>
    </StyledAccommodationWrapper>
  );
}
