import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #95DC66;
  color: white;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #1A4B33;
    color: white;
  }
`;

const resetButtonStyles = css`
  background-color: none;
  color: white;
  border: none;

  &:hover {
    color: #95DC66;

  }
`;


const getButtonStyles = props => {
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
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;