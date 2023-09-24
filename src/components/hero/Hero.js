import {  Div, HeroContainer, StyledButton, StyledImg, Typography } from "../../App.Styled"


function Hero() {
    return (
        <HeroContainer className="flex">
                <Div>
                    <Typography className="extrStyled" fontSize ="50" fontWeight ="600" marginTypography = "180px 0 40px 60px">Care products for every home.</Typography>
                    <Typography className="extrStyled" fontSize ="20" marginTypography = "10px 0 20px 60px">Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</Typography>
                    <StyledButton>See Collection</StyledButton>
                </Div>
                <Div>
                    <StyledImg src = {require('../../assets/img.png')}/>
                </Div>
                
            

        </HeroContainer>
    )
}

export default Hero