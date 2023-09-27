import React from "react";
import { Container, StyledImage, Typography } from "../../../App.Styled";
import { StyledCard, StyledCardWrapper } from "../Home.Styles";

function Collection() {
  const Card = ({ img, name }) => {
    return (
      <StyledCard>
        <StyledImage src={img} alt="item image" height={'80%'} />
        <Typography fs={34} fontWeight={500} mt={25}>
          {name}
        </Typography>
        <Typography className="collection">See Collection</Typography>
      </StyledCard>
    );
  };
  return (
    <Container>
      <StyledCardWrapper>
        <Card img={require("../../../assets/splash.png")} name={"Splash"} />
        <Card
          img={require("../../../assets/Paste image.png")}
          name={"Hair Style"}
        />
      </StyledCardWrapper>
    </Container>
  );
}

export default Collection;
