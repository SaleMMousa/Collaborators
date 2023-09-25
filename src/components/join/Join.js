import React from 'react';
import { EmailContainer, JoinContainer,  JoinSection, StyledButton, StyledInput } from './StyledJoin';
import { Typography } from '../../App.Styled';
import {AiOutlineMail} from 'react-icons/ai';
function Join() {
    return ( 
        <JoinSection>
            <JoinContainer>
            <Typography fs={"40"} fw={500}>
            Join Our Newsletter
            </Typography>
            <Typography fs={"18"} fw={400}>
            Big discounts and right to your inbox.
            </Typography>
            <EmailContainer >
                 <AiOutlineMail/>
                 <StyledInput placeholder='Email address'></StyledInput>
                 <StyledButton type="submit" value="Submit"> Signup</StyledButton>
            </EmailContainer>
            </JoinContainer>
        </JoinSection>
     );
}

export default Join;