import React, { useState } from "react";
import {
  StyledCarouselArrow,
  StyledCarouselContainer,
  StyledCarouselMainImg,
  StyledCarouselSecondaryImgs,
  StyledSecondaryImgsContainer,
} from "./accommodationImageCarousel.styles";

export function AccommodationImageCarousel({ accommodationImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <StyledCarouselArrow leftPx={"5px"} leftPxLg={"16px"} onClick={goToPrevious}>
            <i class="fas fa-angle-double-left"></i>
          </StyledCarouselArrow>
          <StyledCarouselArrow rightPx={"5px"} rightPxLg={"0"} leftPxLg={"90px"} onClick={goToNext}>
            <i class="fas fa-angle-double-right"></i>
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
