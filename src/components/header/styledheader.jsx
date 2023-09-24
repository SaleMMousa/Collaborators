import styled from "styled-components";
import { FlexBox } from "../../App.Styled";
import { Link } from "react-router-dom";

export const StyledLogoImg = styled.div`
width: 155px;
height: 30px;`;
export const StyledHeader = styled.div`
  padding: 20px 0;
`;

export const StyledLi = styled(Link)`
  margin-left: 40px;
  color: #121212;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;
export const StyledMenu = styled(FlexBox)``;
export const StyledIcons = styled(FlexBox)`
/* margin-right: 20px; */
`;
export const StyledIcon = styled.span`
margin-left: 20px;
font-size: 26px;
`;
export const StyledCart = styled(FlexBox)`
width: 20px;
height: 20px;
justify-content: center;
border-radius: 20px;
background-color: #000;
color: #fff;
text-align: center;
font-size: 12px;
font-weight: 700;
margin-left: 10px;
line-height: 10px; 
`;
