import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  height: 730px;
  width: 100%;
  margin: 10px;
  display: column;
`;

export const FirstSection = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SecondSection = styled.div`
  height: 60%;
  width: 100%;
  margin-top: 30px;
  margin-right: 30px;
`;

const DefaultContainer = css`
  border: 4px solid #505050;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const UserTasksContainer = styled.div`
  height: 100%;
  width: 60%;
  ${DefaultContainer}
`;

export const AllocatedUsersContainer = styled.div`
  height: 100%;
  width: 30%;
  margin-right: 30px;
  ${DefaultContainer}
`;

export const AllocatedProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 30px;
  ${DefaultContainer}
`;
