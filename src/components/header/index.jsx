import React from "react";
import { Container, FlexBox } from "../../App.Styled";
import {
  StyledCart,
  StyledIcons,
  StyledLogoImg,
  StyledMenu,
  StyledHeader,
  StyledLi,
  StyledIcon,
} from "./styledheader";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header">
      <StyledHeader>
        <Container>
          <FlexBox className="jsb">
            <StyledLogoImg>
              <img
                src={require("../../assets/Branding.png")}
                alt=""
                srcset=""
              />
            </StyledLogoImg>
            <StyledMenu>
              <StyledLi to={"/"}>Home</StyledLi>
              <StyledLi to={"/product"}>Product</StyledLi>
              <StyledLi to={"/category"}>Category</StyledLi>
            </StyledMenu>
            <StyledIcons>
              <StyledIcon>
                <AiOutlineSearch />
              </StyledIcon>
              <StyledIcon>
                <AiOutlineUser />
              </StyledIcon>
              <StyledIcon>
                <BiShoppingBag />
              </StyledIcon>
              <StyledCart>5</StyledCart>
            </StyledIcons>
          </FlexBox>
        </Container>
      </StyledHeader>
    </div>
  );
};

export default Header;
