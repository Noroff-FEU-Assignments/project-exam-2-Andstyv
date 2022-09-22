import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StyledSearchDiv, StyledSearchForm, StyledSearchFormBtn, StyledSearchFormDiv } from "./search.styles";

export function SkeletonSearch() {
  return (
    <>
      <StyledSearchDiv style={{ textAlign: "start" }}>
        <StyledSearchForm>
          <StyledSearchFormDiv
            minWidth="200px"
            position="relative"
            padding="10px"
            gridColumn="1/4"
            gridRow="1"
            borderBottom="1px solid #000"
            gridColumnLg="1"
          >
            <Skeleton width={100} height={21}></Skeleton>
            <Skeleton width={200} height={22}></Skeleton>
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeftMd="1px solid #000" gridColumnLg="2">
            <Skeleton width={40} height={18}></Skeleton>
            <Skeleton width={83} height={17}></Skeleton>
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeft="1px solid #000">
            <Skeleton width={20} height={18}></Skeleton>
            <Skeleton width={83} height={17}></Skeleton>
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeft="1px solid #000">
            <Skeleton width={50} height={18}></Skeleton>
            <Skeleton width={20} height={15}></Skeleton>
          </StyledSearchFormDiv>
          <StyledSearchFormBtn>
            <Skeleton width={120} height={40}></Skeleton>
          </StyledSearchFormBtn>
        </StyledSearchForm>
      </StyledSearchDiv>
    </>
  );
}
