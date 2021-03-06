import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Footer from "./components/Footer/Footer.component";
import LogInPage from "./pages/LogInPage/LogIn.component";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPassword.component";
import DashboardPage from "./pages/DashboardPage/Dashboard.component";
import SideBar from './components/SideBar/SideBar.component'
// import Header from "./components/Header/Header.component";

const App = () => {
  return (
    <div>
      <GlobalStyle />
    
      <Switch>
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/resetpassword' component={ResetPasswordPage} />
        <Route exact path='/' component={DashboardPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
