import React, { useState } from "react";

import {
  ResetContainer,
  ResetFormTitle,
  ButtonsBarContainer,
  ResetButton,
} from "./ResetForm.styles";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

const ResetPasswordForm = () => {
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const { email } = userEmail;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserEmail({ ...userEmail, [name]: value });
  };

  return (
    <ResetContainer>
      <ResetFormTitle>
        Enter your email address to reset the password
      </ResetFormTitle>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
        />

        <ButtonsBarContainer>
          <ResetButton>
            <CustomButton type='submit'>Reset Password</CustomButton>
          </ResetButton>
        </ButtonsBarContainer>
      </form>
    </ResetContainer>
  );
};

export default ResetPasswordForm;
