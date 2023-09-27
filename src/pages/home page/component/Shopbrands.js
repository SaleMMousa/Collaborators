import React from "react";
import { Container, StyledImage, Typography } from "../../../App.Styled";
import {
  BrandImage,
  StyledBrandsWrapper,
  StyledShopContent,
  StyledShopImages,
} from "../Home.Styles";
import { FaArrowRight } from "react-icons/fa";
import { LatestContent } from "./Lastest/StyledLatest";

function ShopBrands() {
  return (
    <LatestContent>
      <Container>
        <StyledBrandsWrapper>
          <StyledShopContent>
            <Typography fs={40} fw={500}>
              Shop brands
            </Typography>
            <Typography fs={18} color={"#3E3E59"} mt={16}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atqu.
            </Typography>
            <Typography fs={18} mt={24}>
              See all brands <FaArrowRight fs={18} />
            </Typography>
          </StyledShopContent>
          <StyledShopImages>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos.png")} />
            </BrandImage>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos1.png")} />
            </BrandImage>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos3.png")} />
            </BrandImage>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos3.png")} />
            </BrandImage>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos4.png")} />
            </BrandImage>
            <BrandImage>
              <StyledImage mt={24} src={require("../../../assets/Logos5.png")} />
            </BrandImage>
          </StyledShopImages>
        </StyledBrandsWrapper>
      </Container>
    </LatestContent>
  );
}

export default ShopBrands;
