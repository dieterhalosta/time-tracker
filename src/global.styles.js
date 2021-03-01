import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;
		font-family: 'Open Sans';
		margin: 0;
		padding: 20px 40px;
        color: white;
        background-image: linear-gradient(to bottom right, #95DC66, #1A4B33);
        background-repeat: no-repeat;
        background-attachment: fixed;
		background-size: cover;
		overflow: hidden;
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		
	}

	* {

        box-sizing: border-box;
	}
`;
