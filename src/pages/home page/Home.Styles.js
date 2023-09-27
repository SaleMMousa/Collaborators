import styled from "styled-components";
import { FlexBox } from "../../App.Styled";


export const CategoriesHeader = styled(FlexBox)`
  justify-content: space-between;
  width: 90%;
  margin: 52px auto;
  align-items: center;
`;

export const SwiperContainer = styled.div`
  padding: 32px 0 52px  5%;
`;
export const StyledCardWrapper = styled(FlexBox)`
  justify-content: space-between;
  text-align: center;
  
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  width: 49%;
  padding: 52px 0;
  @media screen  and (max-width: 700px){
    width: 100%;
    padding: 25px 0;
  }
`;
export const StyledBrandsWrapper = styled(FlexBox)`
  padding: 70px 52px;
  justify-content: space-between;
  background-color: #fafafb;
  flex-wrap: wrap;
  @media screen  and (max-width: 700px){
    padding: 40px 16px;
  }
`;

export const BrandImage = styled.div`
  width: 30%;
  min-width: 140px;
`;
export const StyledShopContent = styled.div`
  width: 40%;
  text-align: left;
  @media screen  and (max-width: 700px){
    width: 100%;
  }
`;

export const StyledShopImages = styled(FlexBox)`
  justify-content: space-between;
  width: 47%;
  flex-wrap: wrap;
  &img {
    margin: 10px;
  }
  @media screen  and (max-width: 700px){
    width: 100%;
  }
`;

export const TrendingContent = styled(FlexBox)`
  justify-content: space-between;
  flex-wrap: wrap;

`;
export const TrendingDetail = styled.div`
  padding: 143px 0;
  width:33%;
  @media screen  and (max-width: 700px){
    padding: 24px 0;
    width:90%;
      /* max-width: 600px; */
  }
`;
export const TrendingImg = styled.div`
 width: 43%;
 padding-bottom: 57px;
 @media screen  and (max-width: 700px){
  width:70%;
  margin-left: auto;
  }
`;
