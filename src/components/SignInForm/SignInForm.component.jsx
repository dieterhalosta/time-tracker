import React, { useState } from "react";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ResetButtonContainer,
  SignInButtonContainer,
} from "./SignInForm.styles";

import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Sign in with your email and password</SignInTitle>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <ResetButtonContainer>
            <CustomButton reset>Reset Password</CustomButton>
          </ResetButtonContainer>
          <SignInButtonContainer>
            <CustomButton type='submit'> Log in </CustomButton>
          </SignInButtonContainer>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
