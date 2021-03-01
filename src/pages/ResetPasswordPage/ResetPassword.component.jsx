import React from 'react';
import {PageContainer, ResetPasswordContainer,LogoContainer, FormContainer  } from './ResetPassword.styles'
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import ResetForm from '../../components/SignInForm/SignInForm.component'


const ResetPasswordPage = () => {

    return (
        <PageContainer>
        <ResetPasswordContainer>
            <LogoContainer><Logo/></LogoContainer>
            <FormContainer>
            <ResetForm/>
            
            </FormContainer>
        </ResetPasswordContainer>
        </PageContainer>
    )
}

export default ResetPasswordPage;