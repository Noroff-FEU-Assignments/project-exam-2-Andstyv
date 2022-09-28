import styled from "styled-components";
import headerImg from "../../../assets/img/header_4_1600.webp";

export const StyledHeroImg = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url(${headerImg}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`;

export const StyledHeroH1 = styled.h1`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: var(--font-size-hero-main-sm);
  width: 100%;
  color: var(--color-yellow);
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-hero-main-lg);
  }
`;

export const StyledSecondaryHeaderText = styled.p`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: var(--font-size-hero-secondary-lg);
  color: var(--main-bg-color);
  font-weight: bold;
  width: 100%;

  @media only screen and (min-width: 768px) {
    top: 175px;
  }
`;
