import React from 'react';
import { EmailContainer, JoinFonts, JoinP, JoinSection, StyledButton, StyledInput } from './StyledJoin';
import { AiOutlineMail } from 'react-icons/ai';
function Join() {
    return (
        <JoinSection>

            <JoinFonts    fs={"50"} fw={500} mt={50}>
                Join Our Newsletter
            </JoinFonts>
            <JoinP ypography  fs={"20"} fw={400}>
                Big discounts and right to your inbox.
            </JoinP>
            <EmailContainer >
                <AiOutlineMail />
                <StyledInput placeholder='Email address'></StyledInput>
                <StyledButton type="submit" value="Submit"> Signup</StyledButton>
            </EmailContainer>
        </JoinSection>
    );
}

export default Join;