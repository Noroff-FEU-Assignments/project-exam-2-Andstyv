import React, { useState } from "react";
import styled from "styled-components";

const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 900px;
  }
`;

const StyledCarouselMainImg = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const StyledSecondaryImgsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  max-width: 100%;
  height: 75px;
  gap: 5px;

  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 100%;
    margin-top: 0px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 25px;
    gap: 5px;
  }
`;

const StyledCarouselSecondaryImgs = styled.div`
  width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  border-radius: 3px;

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 125px;
    max-height: 125px;
  }
`;

const StyledCarouselArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  left: ${(props) => props.leftPx || ""};
  right: ${(props) => props.rightPx || ""};
  color: #fff;
  padding: 3px;
  background: brown;

  @media only screen and (min-width: 768px) {
    left: ${(props) => props.leftPxLg || ""};
    right: ${(props) => props.rightPxLg || ""};
    display: none;
  }
`;

function AccommodationImageCarousel({ accommodationImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(accommodationImages);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? accommodationImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === accommodationImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const ImgBg = {
    backgroundImage: `url(${accommodationImages[currentIndex].attributes.url})`,
  };

  return (
    <>
      <StyledCarouselContainer>
        <div>
          <StyledCarouselArrow leftPx={"32px"} leftPxLg={"16px"} onClick={goToPrevious}>
            LEFT
          </StyledCarouselArrow>
          <StyledCarouselArrow rightPx={"32px"} rightPxLg={"0"} leftPxLg={"90px"} onClick={goToNext}>
            RIGHT
          </StyledCarouselArrow>
        </div>
        <div>
          <StyledCarouselMainImg key={accommodationImages[0].attributes.url} style={ImgBg}></StyledCarouselMainImg>
        </div>
        <StyledSecondaryImgsContainer>
          {" "}
          {accommodationImages.map((image, imageIndex) => {
            return (
              <StyledCarouselSecondaryImgs
                onClick={() => goToSlide(imageIndex)}
                key={image.attributes.url}
                style={{ backgroundImage: `url(${image.attributes.url})` }}
              ></StyledCarouselSecondaryImgs>
            );
          })}
        </StyledSecondaryImgsContainer>
      </StyledCarouselContainer>
    </>
  );
}

export default AccommodationImageCarousel;
