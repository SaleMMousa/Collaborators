import React from "react";
import { StyledProductsWrapper } from "./Products.Styled";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Container, FlexColum } from "../../App.Styled";
import ProductCard from "../../components/productCard";
import img from "../../assets/prod1.png";
import img1 from "../../assets/prod2.png";
import { useParams } from "react-router-dom";
function Products() {
  let { id } = useParams();
  const breadcrumbs = [
    <Link underline="hover"  key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography fontSize={"12px"}  key="2" color="text.primary">
      shop
    </Typography>,
  ];
  return (
    <>
      <StyledProductsWrapper>
        <Breadcrumbs  separator="›" fontSize={"12px"}  aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Typography variant="h2" margin={"10px 0"}>
          Shop {id}
        </Typography>
        <Typography variant="p" width={"90%"} maxWidth={"510px"}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis voluptatum deleniti.
        </Typography>
      </StyledProductsWrapper>

      <Container>
        <Typography variant={"p"} color={"#605F5F"} padding={"30px 0 22px 0"} display={"block"} borderBottom={"1px solid #EAEAEA"} >All products</Typography>
        <FlexColum>

        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        <ProductCard productImage={img} />
        <ProductCard productImage={img1} />
        </FlexColum>
      </Container>
    </>
  );
}

export default Products;
