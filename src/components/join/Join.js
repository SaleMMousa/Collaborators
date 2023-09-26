import React from 'react';
import { EmailContainer, JoinSection, StyledButton, StyledInput } from './StyledJoin';
import { Typography } from '../../App.Styled';
import { AiOutlineMail } from 'react-icons/ai';
function Join() {
    return (
        <JoinSection>
            <Typography   fs={"50"} fw={500} mt={50}>
                Join Our Newsletter
            </Typography>
            <Typography  fs={"20"} fw={400}>
                Big discounts and right to your inbox.
            </Typography>
            <EmailContainer >
                <AiOutlineMail />
                <StyledInput placeholder='Email address'></StyledInput>
                <StyledButton type="submit" value="Submit"> Signup</StyledButton>
            </EmailContainer>
        </JoinSection>
    );
}

export default Join;