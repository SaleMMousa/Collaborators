import { Typography } from "../../App.Styled";
import {
  HeroContainer,
  HeroContent,
  StyledButton,
  HeroImg,
} from "./StyledHero";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <Typography className="extrStyled" fs="54" fw="500" ls="-1px">
          Care products for every home.
        </Typography>
        <Typography className="extrStyled" fs="18" m="8px 0 0 0">
          Keep your everyday style chic and on-trend with our selection 20+
          styles to choose from.
        </Typography>
        <StyledButton>See Collection</StyledButton>
      </HeroContent>
      <HeroImg>
        <img src={require("../../assets/img.png")} />
      </HeroImg>
    </HeroContainer>
  );
}

export default Hero;
