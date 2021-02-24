import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className='test'>
        This is just a test
      </div>
    </BrowserRouter>
  );
}

export default App;
