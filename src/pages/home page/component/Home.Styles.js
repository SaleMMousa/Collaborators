import styled from "styled-components";
import { FlexBox, StyledImage } from "../../../App.Styled";

export const CategoriesContainer = styled.div`
  padding: 52px 0 52px 52px;
  overflow: hidden;
`;
export const CategoriesHeader = styled(FlexBox)`
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

export const SwiperContainer = styled.div`
  margin-top: 32px;
`;
export const StyledCardWrapper = styled(FlexBox)`
  justify-content: space-between;
  text-align: center;
  padding: 52px 0;
`;

export const StyledCard = styled.div`
  width: 49%;
`;
export const StyledBrandsWrapper = styled(FlexBox)`
  padding:70px 52px ;
  justify-content: space-between;
  background-color: #FAFAFB;
`;

export const StyledShopContent = styled.div`
  width: 48%;
  text-align: left;
`;

export const StyledShopImages = styled(FlexBox)`
  justify-content: space-between;
  width: 47%;
  flex-wrap: wrap;
  /* align-items: space-between !important; */
  &img {
    margin: 10px;
  }
`;
