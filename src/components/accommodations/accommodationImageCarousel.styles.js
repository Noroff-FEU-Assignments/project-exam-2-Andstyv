import styled from "styled-components";

export const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    max-width: 900px;
  }
`;
export const StyledCarouselMainImg = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    min-width: 325px;
    height: 400px;
  }
`;
export const StyledSecondaryImgsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  max-width: 100%;
  height: 50px;
  gap: 5px;
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    height: 75px;
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    gap: 5px;
  }
`;
export const StyledCarouselSecondaryImgs = styled.div`
  width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  min-width: 30px;
  max-width: 75px;
  max-height: 50px;
  @media only screen and (min-width: 768px) {
    height: 100%;
    max-height: 125px;
  }
`;
export const StyledCarouselArrow = styled.div`
  position: absolute;
  top: 45%;
  transform: translate(0, -50%);
  z-index: 1;
  left: ${(props) => props.leftPx || ""};
  right: ${(props) => props.rightPx || ""};
  color: var(--color-default-black);
  padding: 3px;
  text-shadow: 1px 1px 3px #000;
  font-size: 36px;
  @media only screen and (min-width: 768px) {
    left: ${(props) => props.leftPxLg || ""};
    right: ${(props) => props.rightPxLg || ""};
    display: none;
  }
`;
