import styled from "styled-components";
import headerImg from "../../../assets/img/header_3_1600.webp";

const StyledHeroImg = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url(${headerImg}), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`;

const StyledHeroH1 = styled.h1`
  position: absolute;
  top: 175px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: 56px;
  color: #ffda60;
  font-weight: bold;
`;

function Hero() {
  return (
    <>
      <StyledHeroImg className="hero-img"></StyledHeroImg>
      <StyledHeroH1>Bergen awaits</StyledHeroH1>
    </>
  );
}

export default Hero;
