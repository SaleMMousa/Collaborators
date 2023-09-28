import React from 'react';
import img from "../../assets/signin.png";
import {StyleAuthImage, StyledAuthLayout} from "./Auth.Styled";

function AuthLayout({ children }) {
    return (
        <StyledAuthLayout>
            <StyleAuthImage src={img} alt={"sign in"}/>
            {children}
        </StyledAuthLayout>
    );
}

export default AuthLayout;