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
import logo from "../../assets/Branding.png";
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
              <img src={logo} alt="" srcset="" />
            </StyledLogoImg>
            <StyledMenu>
              <StyledLi>Home</StyledLi>
              <StyledLi>Product</StyledLi>
              <StyledLi>Category</StyledLi>
              {/* <Link to={"/"}>Home</Link>
              <Link to={"/product"}>Product</Link> */}
              {/* <Link to={"/category"}>Category</Link> */}
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
