import React from "react";
import Header from "../../components/Header/Header.component";

const Dashboard = ({ checkUserSession, currentUser }) => {
  return (
    <div>
      <Header />

      <div>
        This is the dashboard
        <div>Own tasks</div>
        <div>Allocated Users</div>
        <div>Allocated Projects</div>
      </div>
    </div>
  );
};

export default Dashboard;
