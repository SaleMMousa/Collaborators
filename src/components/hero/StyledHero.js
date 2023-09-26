import styled from "styled-components";
import { FlexBox } from "../../App.Styled";

export const HeroContainer = styled(FlexBox)`
  background-color: #f2b6bc;
  @media screen  and (max-width: 700px){
    flex-direction: column-reverse;
  }
`;
export const StyledButton = styled.button`
  background-color: #121212;
  color: white;
  border: none;
  border-radius: 39px;
  padding: 10px 26px;
  margin-top: 28px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.4px;
  line-height: 32px;
`;

export const HeroContent = styled.div`
  width: 48%;
  padding: 191px 0px 284px 52px;
  @media screen  and (max-width: 700px){
    padding: 51px 52px 54px 32px;
    width: 100% ;
  }
`;

export const HeroImg = styled.div`
  width: 52%;
  @media screen  and (max-width: 700px){
    width: 100% ;
  }
`;
