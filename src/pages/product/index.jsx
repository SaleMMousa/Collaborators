import React from "react";
import {
  HeaderDescription,
  MenuText,
  MenuDescription,
  StyledDescriptionWrapper,
  HeaderReviews,
} from "./Product.Styled";
import { Box, Button, CardMedia, Rating, Typography } from "@mui/material";
import { RouterProduct } from "../../Router";
import { FlexBox, FlexColum, StyledImage } from "../../App.Styled";

function Product() {
  const ReviewCard = () => {
    return (
      <HeaderReviews>
        <FlexBox align={"center"}><StyledImage src={require("../../assets/review.png")} width={'76px'} ></StyledImage>
          <FlexColum margin={"0 0 0 16px"} >
            <FlexBox align={"center"}>
              <Typography fontSize={"18px"} color={"#000"} fontWeight={600}>
                Jaxson Aminoff
              </Typography>
              <Typography
                fontSize={"12px"}
                color={"#605F5F"}
                marginLeft={"10px"}
              >
                Jan 12, 2088
              </Typography>
            </FlexBox>
            <Rating name="read-only"  value={4} readOnly size="small" />
          </FlexColum>
        </FlexBox>
      </HeaderReviews>
    );
  };
  return (
    <StyledDescriptionWrapper>
      <MenuDescription>
        <MenuText>Description</MenuText>
        <MenuText>Additional Info</MenuText>
        <MenuText>Reviews</MenuText>
        <MenuText>Questions</MenuText>
      </MenuDescription>
      <HeaderReviews>
        <Typography fontSize={34} fontWeight={400}>
          Customer reviews
        </Typography>
        <FlexBox align={"center"} justify={"space-Between"}>
          <FlexBox align={"center"}>
            <Rating name="read-only" value={4} readOnly />
            <Typography fontSize={"12px"} color={"#605F5F"} marginLeft={"10px"}>
              24 total Reviews
            </Typography>
          </FlexBox>
          <Button
            variant="outlined"
            size="large"
            sx={{ color: "#121212", borderColor: "#121212" }}
          >
            Write review
          </Button>
        </FlexBox>
      </HeaderReviews>
      <ReviewCard />
    </StyledDescriptionWrapper>
  );
}

export default Product;
