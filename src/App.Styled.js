import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;

}
    body {
        margin: 0;
      color: #121212;

    }
    ul{
      list-style: none;
    }

    
`

export const theme = {
    pallete : {
        black : "#000",
        white: "#fff"

    }
}

export const FlexBox = styled.div`  
    display: flex;
    &.jsb{
      justify-content: space-between;
    }
    justify-content: ${props => props.justify};
  align-items: ${props => props.items};
    align-items: center;
`
export const Container = styled.div`  
   width: 90%;
  margin: 0px auto;
`

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`

export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    text-align: ${props => props.align};
    margin: ${props => props.marginTypography};
    border: ${props => props.border};
    &.extrStyled{
        width: 100%;
    }
    &.collection{
        width: fit-content;
        margin: 0 auto;
        border-bottom: 1px solid #000;
        padding-bottom:10px
    }
    
  
    
`

export const HeroContainer = styled.div`  
    background-color: #F2B6BC;
    &.flex{
        display: flex;
    
    }
`

export const StyledButton = styled.button`  
    background-color: black;
    color:white;
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 15px 30px ;
    margin-top: 20px ;
    margin-left: 50px ;

`
export const Div = styled.div`  
    width: 50%;
    height: 700px;
`

export const StyledImg = styled.img`  
    width: 100%;
    height: 100%;
`

export const StyledImage = styled.img`
  max-width: 100%;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
`

