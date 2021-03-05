import React from "react";
import {PageContainer,FirstSection,UserTasksContainer,AllocatedUsersContainer,SecondSection,AllocatedProjectsContainer} from './Dashboard.styles'
import Header from "../../components/Header/Header.component";
import SideBar from '../../components/SideBar/SideBar.component'

const DashboardPage = ({ checkUserSession, currentUser }) => {
  return (
    <div>
      <Header />
      <PageContainer>
        <FirstSection>
        <UserTasksContainer>Own tasks</UserTasksContainer>
        <AllocatedUsersContainer>Allocated Users</AllocatedUsersContainer>
        </FirstSection>
        <SecondSection>
        <AllocatedProjectsContainer>Allocated Projects</AllocatedProjectsContainer>
        </SecondSection>
        
      </PageContainer>
    </div>
  );
};

export default DashboardPage;
