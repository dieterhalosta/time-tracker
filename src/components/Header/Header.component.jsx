import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo1.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Tracker,
  OptionLink,
} from "./Header.styles";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <Tracker>START TRACKING</Tracker>
        {/* <OptionLink to='/addtask'>ADD TASK</OptionLink>
        <OptionLink to='/adduser'>ADD USER</OptionLink>
        <OptionLink to='/addproject'>CREATE PROJECT</OptionLink>
        <OptionLink to='/userdetails'>PROFILE</OptionLink> */}
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/login'>SIGN IN</OptionLink>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
