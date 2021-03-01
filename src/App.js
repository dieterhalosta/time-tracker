import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import LogInPage from "./pages/LogInPage/LogIn.component";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LogInPage />
    </BrowserRouter>
  );
};

export default App;
