import React from 'react';
import {LogInContainer,LogoContainer, FormContainer  } from './LogIn.styles'
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import SignIn from '../../components/SignInForm/SignInForm.component'


const LogInPage = () => {

    return (
        
        <LogInContainer>
            <LogoContainer to='/'><Logo/></LogoContainer>
            <FormContainer>
            <SignIn/>
            </FormContainer>
        </LogInContainer>
    )
}

export default LogInPage;