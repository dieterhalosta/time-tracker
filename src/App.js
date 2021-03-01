import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import LogInPage from "./pages/LogInPage/LogIn.component";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPassword.component";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/resetpassword' component={ResetPasswordPage} />
      </Switch>
    </div>
  );
};

export default App;
