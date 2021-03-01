import React from 'react';
import {PageContainer, ResetPasswordContainer,LogoContainer, FormContainer  } from './ResetPassword.styles'
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import ResetPasswordForm from '../../components/ResetForm/ResetForm.component'


const ResetPasswordPage = () => {

    return (
        <PageContainer>
        <ResetPasswordContainer>
            <LogoContainer><Logo/></LogoContainer>
            <FormContainer>
            <ResetPasswordForm/>
            </FormContainer>
        </ResetPasswordContainer>
        </PageContainer>
    )
}

export default ResetPasswordPage;