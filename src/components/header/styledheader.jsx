import styled from "styled-components";
import { FlexBox } from "../../App.Styled";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  padding: 20px 0;
`;
export const StyledHeaderContent = styled(FlexBox)`
  justify-content: space-between;
`;
export const StyledLogoImg = styled.div`
width: 155px;
height: 30px;`;

export const StyledLink = styled(Link)`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: #121212;
`;

export const StyledIcon = styled(FlexBox)`
width: 125px;
align-items: center;
justify-content: space-between;
`;
export const StyledCart = styled(FlexBox)`
width: 20px;
height: 20px;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #121212;
color: #fff;
font-size: 12px;
font-weight: 700;
margin-left: 7px;
line-height: 10px; 
`;
