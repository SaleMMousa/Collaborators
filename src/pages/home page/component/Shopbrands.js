import React from "react";
import {
  Container,
  FlexBox,
  StyledImage,
  Typography,
} from "../../../App.Styled";
import {
    StyledBrandsWrapper,
  StyledCardWrapper,
  StyledShopContent,
  StyledShopImages,
} from "./Home.Styles";
import { FaArrowRight } from "react-icons/fa";
import brandImg1 from "../../../assets/Logos.png";
import brandImg2 from "../../../assets/Logos.svg";

function ShopBrands(props) {
  return (
    <StyledCardWrapper>

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
          <StyledImage width={'155px'} height={'60px'} mt={24}  src={brandImg1} />
          <StyledImage width={'155px'} height={'60px'} mt={24}  src={brandImg2} />
          <StyledImage width={'155px'} height={'60px'} mt={24}  src={brandImg2} />
          <StyledImage width={'155px'} height={'60px'} mt={24}  src={brandImg1} />
          <StyledImage width={'155px'} height={'60px'} mt={24}  src={brandImg2} />
          <StyledImage width={'155px'} height={'60px'} mt={24} src={brandImg2} />
        </StyledShopImages>
      </StyledBrandsWrapper>
    </Container>
    </StyledCardWrapper>
  );
}

export default ShopBrands;
