import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Footer from './components/Footer/Footer.component'
import LogInPage from "./pages/LogInPage/LogIn.component";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPassword.component";
import Dashboard from './pages/DashboardPage/Dashboard.component'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/resetpassword' component={ResetPasswordPage} />
        <Route exact path='/home' component={Dashboard}/>
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
