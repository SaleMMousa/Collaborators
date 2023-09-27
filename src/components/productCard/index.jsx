import React from "react";
import { FlexBox, StyledDel, StyledImage } from "../../App.Styled";
import { Button, CardContent, CardMedia, Rating, Typography } from "@mui/material";


function ProductCard({
  productImage,
  productName,
  price,
  prevPrice,
  rate,
  description,
}) {
  return (
    <FlexBox p={'24px 0'}>
      <CardMedia
        component="img"
        sx={{ width: 262 ,height:304, objectFit:"contain"}}
        image={productImage}
        alt="Live from space album cover"
      />

      <CardContent sx={{ width: "100%", maxWidth: "310px" }}>
        <Typography>{productName}test</Typography>
        <FlexBox items={"center"}>
          <Typography variant={"h6"}>{price}$56</Typography>
          <StyledDel>{prevPrice}$22</StyledDel>
        </FlexBox>

        <Rating name="read-only" value={2.5} readOnly />

        <Typography variant={"body2"}>
          {description} bbbbbbbb bbbbbbbbbbb bbbbbbbbbbb bbbbb
        </Typography>

        <Button variant="contained" fullWidth={true}>
          Add to cart
        </Button>
      </CardContent>
    </FlexBox>
  );
}

export default ProductCard;
