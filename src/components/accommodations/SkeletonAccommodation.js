import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const StyledSkeletonAccContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 820px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 485px;
    min-width: 10%;
  }
`;

const StyledSkeletonAccDiv = styled.div`
  width: 100%;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    width: 400px;
    margin-left: 20px;
  }
`;

const StyledSkeletonAccDivText = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 270px;

  @media only screen and (min-width: 768px) {
    height: 290px;
    margin-left: 20px;
    width: 400px;
  }
`;

const StyledSkeletonImgDiv = styled.div`
  width: 100%;
  height: 300px;

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 395px;
  }
`;

export function SkeletonAccommodation() {
  return (
    <div className="acc-wrapper" style={{ margin: "50px 20px 0 20px", maxWidth: "900px", width: "90%" }}>
      <StyledSkeletonAccContainer>
        <div>
          <StyledSkeletonImgDiv>
            <Skeleton style={{ width: "100%", borderRadius: "10px", height: "100%" }} />
          </StyledSkeletonImgDiv>
          <StyledSkeletonAccDiv style={{ width: "100%", marginLeft: "0" }}>
            <Skeleton height={60} />
          </StyledSkeletonAccDiv>
        </div>
        <div>
          <StyledSkeletonAccDiv>
            <Skeleton height={42} />
          </StyledSkeletonAccDiv>
          <StyledSkeletonAccDivText>
            <Skeleton style={{ height: "100%" }} />
          </StyledSkeletonAccDivText>
          <StyledSkeletonAccDiv>
            <Skeleton height={100} style={{ borderRadius: "10px" }} />
          </StyledSkeletonAccDiv>
        </div>
      </StyledSkeletonAccContainer>
    </div>
  );
}
