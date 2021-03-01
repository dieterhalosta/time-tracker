import React from 'react';
import {PageContainer, LogInContainer,LogoContainer, FormContainer  } from './LogIn.styles'
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import SignIn from '../../components/SignInForm/SignInForm.component'


const LogInPage = () => {

    return (
        <PageContainer>
        <LogInContainer>
            <LogoContainer><Logo/></LogoContainer>
            <FormContainer>
            <SignIn/>
            </FormContainer>
        </LogInContainer>
        </PageContainer>
    )
}

export default LogInPage;