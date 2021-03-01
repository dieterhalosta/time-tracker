import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #95dc66;
  color: white;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #1a4b33;
    color: white;
  }
`;

const resetButtonStyles = css`
  background-color: transparent;
  color: white;
  border: none;
  padding-right: 0px;

  &:hover {
    color: #95dc66;
  }
`;

const getButtonStyles = (props) => {
  return props.reset ? resetButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
