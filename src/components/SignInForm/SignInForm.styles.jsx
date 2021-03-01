import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const ResetButtonContainer = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const SignInButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
