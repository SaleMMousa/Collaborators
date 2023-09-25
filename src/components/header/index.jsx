import React from "react";
import { Container, FlexBox } from "../../App.Styled";
import {
  StyledCart,
  StyledLogoImg,
  StyledHeader,
  StyledLink,
  StyledIcon,
  StyledHeaderContent,
} from "./styledheader";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <StyledHeader>
        <Container>
          <StyledHeaderContent>
            <StyledLogoImg>
              <img
                src={require("../../assets/Branding.png")}
                alt=""
                srcset=""
              />
            </StyledLogoImg>
            <FlexBox align="center">
              <StyledLink to={"/"}>Home</StyledLink>
              <StyledLink to={"/product"}>Product</StyledLink>
              <StyledLink to={"/category"}>Category</StyledLink>
            </FlexBox>
            <FlexBox align="center">
              <StyledIcon>
                <AiOutlineSearch size={'24px'} />
                <AiOutlineUser size={'24px'} />
                <BiShoppingBag size={'24px'} />
              </StyledIcon>
              <StyledCart>5</StyledCart>
            </FlexBox>
          </StyledHeaderContent>
        </Container>
      </StyledHeader>
    </div>
  );
};

export default Header;
