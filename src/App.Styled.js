import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;

}
    body {
        margin: 0;
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
    align-items: center;
`
export const Container = styled.div`  
    width:90%;
    margin: 0 auto;
`

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`

export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    margin: ${props => props.marginTypography};
    &.extrStyled{
        width: 70%;
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