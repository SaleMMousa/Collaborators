import React from "react";
import { Container, Typography } from "../../../App.Styled";
import { TrendingContent, TrendingDetail, TrendingImg } from "./Home.Styles";
import { StyledButton } from "../../../components/hero/StyledHero";

function Trending() {
  return (
    <Container>
      <TrendingContent>
        <TrendingDetail>
            <Typography fw={600}>
                TRENDING
            </Typography>
          <Typography mt={'8'} fs="54" fw="500" ls="-1px">
          Caring about you and your body.
          </Typography>
          <Typography  fs="18" mt="24">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </Typography>
          <StyledButton>See Collection</StyledButton>
        </TrendingDetail>
        <TrendingImg>
        <img src={require("../../../assets/Trendingimage.png")} />
        </TrendingImg>
      </TrendingContent>
    </Container>
  );
}

export default Trending;
