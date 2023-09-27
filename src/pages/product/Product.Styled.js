import styled from "styled-components";
import { FlexBox } from "../../App.Styled";
import { Typography } from "@mui/material";


export const StyledDescriptionWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 52px 0;

`
export const HeaderReviews = styled.div`
  padding: 32px 0;
  border-bottom:1px solid #CBCBCB;
`
export const MenuText = styled(Typography)`
  padding-bottom: 10px;
  margin-right:7% !important;
  &:hover{
    border-bottom: 1px solid #000;
  }
`
export const MenuDescription = styled(FlexBox)`
  border-bottom:1px solid #EAEAEA ;
  
`