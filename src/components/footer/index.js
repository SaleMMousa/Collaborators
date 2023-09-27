import { BiLogoFacebook } from "react-icons/bi"
import { DivContiner,Container, FlexBox, StyleDiv, StyledIcon, Typography, StyledIconCon, Line, StyleSelect } from "../../App.Styled"
import { AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"

function Footer() {
    return (
        <>
            <DivContiner >
                <Container>
                    <FlexBox justify="space-between" wrap="wrap">
                        <StyleDiv>
                            <Typography fs="34" fw="500" ls="-0.6px">About us</Typography>
                            <Typography fs="16" mt="16" fw="400" color = "#605F5F" lh="26">Experience the future of e-commerce design with SHOPR. Limitless design possibilities.</Typography>
                            <StyledIconCon>
                                <StyledIcon>
                                    <BiLogoFacebook />
                                </StyledIcon>
                                <StyledIcon>
                                    <AiOutlineInstagram />
                                </StyledIcon>
                                <StyledIcon>
                                    <AiOutlineTwitter />
                                </StyledIcon>
                                <StyledIcon>
                                    <AiOutlineMail />
                                </StyledIcon>
                            </StyledIconCon>
                        </StyleDiv>
                        <FlexBox justify="space-between" wth = "30">
                            <div>
                                <Typography color ="#121212" fs ="14" fw="600">Information</Typography>
                                <Typography color ="#3E3E59" mt ="16" fs ="14" fw="400">Shipping Policy</Typography>
                                <Typography color ="#3E3E59" mt ="12" fs ="14" fw="400">Returns & Refunds</Typography>
                                <Typography color ="#3E3E59" mt ="12" fs ="14" fw="400">Contact Us</Typography>
                                <Typography color ="#3E3E59" mt ="12" fs ="14" fw="400">Frequently asked</Typography>
                            </div>
                            <div>
                                <Typography color ="#121212" fs ="14" fw="600">Company</Typography>
                                <Typography color ="#3E3E59" mt ="16" fs ="14" fw="400">About Us</Typography>
                                <Typography color ="#3E3E59" mt ="12" fs ="14" fw="400">Privacy Policy</Typography>
                                <Typography color ="#3E3E59" mt ="12" fs ="14" fw="400">Terms & Conditions</Typography>
                                <Typography color ="#3E3E59" mt ="12"  fs ="14" fw="400">Cookie Policy</Typography>
                            </div>
                        </FlexBox>
                    </FlexBox>
                </Container>           
            </DivContiner>
            <Container >
                <Line></Line>
                <FlexBox justify="space-between" p ="24px 0 32px " >
                    <Typography color="#3E3E59" fw="400" fs ="14">© 2023 SHOPR</Typography>
                    <div>
                        <StyleSelect>
                            <option>English</option>
                            <option>English</option>
                            <option>English</option>
                            <option>English</option>
                        </StyleSelect>
                        <StyleSelect>
                            <option>USD</option>
                            <option>USD</option>
                            <option>USD</option>
                        </StyleSelect>
                    </div>
                </FlexBox>
            </Container> 
        </>
        

    )
}


export default Footer