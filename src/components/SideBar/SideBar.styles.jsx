import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SideBarButtons = css`
  border: 4px solid #505050;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 20px;
  text-align: center;
  cursor: pointer;
`;

export const SideBarContainer = styled.div`
width: 300px;
height: 100%;
left: 0;
top: 0;
background-color: white;


`



export const OptionLink = styled(Link)`
  ${SideBarButtons}
`;