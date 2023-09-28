import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif ;
    margin: 0;
    padding: 0;
    outline: none;
}
    body {
      color: #121212;
    }
    ul{
      list-style: none;
    }
    img{
      height: 100%;
      width: 100%;
    }
`;

export const theme = {
  pallete: {
    black: "#000",
    white: "#fff", 
  },
};

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  width: ${(props) => props.wth}%;
  padding:${(props) => props.p};
  /* @media (max-width:768px){
    flex-direction: column;
    align-items: start;
    margin-top:20px;
    
  }   */
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  flex-wrap: ${(props) => props.wrap};
  margin:${(props) => props.margin};
`;


export const FlexColum = styled(FlexBox)`
  flex-direction: column;
`;

export const Typography = styled.p`
  font-size: ${(props) => props.fs}px;
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.m}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  border: ${(props) => props.border};
  letter-spacing: ${(props) => props.ls};
  line-height: ${(props) => props.lh}px;
  border-bottom: ${(props) => props.bb};
  &.extrStyled {
    width: 100%;
    max-width: 410px;
  }
  &.collection {
    width: fit-content;
    margin: 12px auto;
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
    
  }&.select{
    @media (max-width:768px){
    
    
  } 
  }
  &.none{
    @media screen  and (max-width: 700px){
      display: none;
  }
  }
  &.center{
    @media screen  and (max-width: 700px){
     text-align: center;
     width: 100%;
  }
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  margin-bottom: ${(props) => props.mt}px;
`;
export const StyleDiv = styled.div`
  width:35%;
  @media (max-width:768px){
    width:90%
} 
  width:100%;
  max-width: 350px;
`
export const StyledDel= styled.del`
  width:100%;
  max-width: 350px;
`
export const StyledIcon = styled.div`
  font-size: 20px;
  color: #121212;
  margin-right: 10px;
  margin-top: 20px;
  background-color: white;
  display: inline-block;
  border-radius: 50%;
  width: 10%;
  height: 5%;
  padding-top: 5px;
  text-align: center;
`

export const DivContiner = styled.div`
  background-color: #FAFAFB;
  padding: 72px 0;

`

export const StyledIconCon = styled.div`
  margin-top: 16px;
`

export const Line = styled.hr`
  
`
export const StyleSelect = styled.select`
    border: none;
    margin-left: 20px;
`


 
