import { StyledHeroH1, StyledHeroImg, StyledSecondaryHeaderText } from "./hero.styles";

export function Hero() {
  return (
    <>
      <StyledHeroImg className="hero-img"></StyledHeroImg>
      <StyledHeroH1>Bergen awaits</StyledHeroH1>
      <StyledSecondaryHeaderText>Find your next adventure here</StyledSecondaryHeaderText>
    </>
  );
}
