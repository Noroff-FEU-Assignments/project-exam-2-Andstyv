import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const StyledSkeletonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 542px;
  border-radius: 5px;
  margin-top: 50px;

  @media only screen and (min-width: 768px) {
    height: 410px;
  }
`;

const StyledSkeletonInnerDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSkeletonAltDiv = styled.div`
  width: 100%;
  height: 130px;
  @media only screen and (min-width: 768px) {
    height: 230px;
  }
`;

export function SkeletonSearchAccommodations() {
  return (
    <div className="search-acc-wrap" style={{ margin: "0px 20px 0 20px", maxWidth: "900px", width: "90%" }}>
      <StyledSkeletonDiv>
        <StyledSkeletonInnerDiv>
          <Skeleton style={{ boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)", height: "100%" }} />
        </StyledSkeletonInnerDiv>
      </StyledSkeletonDiv>
      <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
        <h2 style={{ width: "140px" }}>
          <Skeleton height={30} />
        </h2>
      </div>
      <div style={{ display: "flex", width: "100%", marginBottom: "25px" }}>
        <StyledSkeletonAltDiv>
          <Skeleton style={{ boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "100%" }} />
        </StyledSkeletonAltDiv>
      </div>
      <div style={{ display: "flex", width: "100%", marginBottom: "25px" }}>
        <StyledSkeletonAltDiv>
          <Skeleton style={{ boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "100%" }} />
        </StyledSkeletonAltDiv>
      </div>
      <div style={{ display: "flex", width: "100%", marginBottom: "25px" }}>
        <StyledSkeletonAltDiv>
          <Skeleton style={{ boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "100%" }} />
        </StyledSkeletonAltDiv>
      </div>
      <div style={{ display: "flex", width: "100%", marginBottom: "25px" }}>
        <StyledSkeletonAltDiv>
          <Skeleton style={{ boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "100%" }} />
        </StyledSkeletonAltDiv>
      </div>
    </div>
  );
}
