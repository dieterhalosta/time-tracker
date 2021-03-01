import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  color: white;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderButtons = css`
  border: 4px solid #505050;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 20px;
  text-align: center;
  cursor: pointer;
`;

export const Tracker = styled.div`
  font-weight: bold;
  ${HeaderButtons}
`;

export const OptionLink = styled(Link)`
  ${HeaderButtons}
`;
