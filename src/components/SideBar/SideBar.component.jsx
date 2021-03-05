import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

import { OptionLink, SideBarContainer } from "./SideBar.styles";
// import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

// const useStyles = makeStyles(styles);

const SideBar = (props) => {
  return (
    <SideBarContainer open='open'>
      <OptionLink to='/'>Logo</OptionLink>
      <div> Time Tracker</div>

      <OptionLink to='/dashdoard'>Button Dashboard</OptionLink>
      <OptionLink to='/addtask'>ADD TASK</OptionLink>
      <OptionLink to='/adduser'>ADD USER</OptionLink>
      <OptionLink to='/addproject'>CREATE PROJECT</OptionLink>
      <OptionLink to='/userdetails'>PROFILE</OptionLink>
    </SideBarContainer>
  );
};

export default SideBar;
