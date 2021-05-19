/*
 * @Author: your name
 * @Date: 2021-05-16 19:58:40
 * @LastEditTime: 2021-05-19 22:10:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\authenticated-app.js
 */
import { useAuth } from "context/auth.context";
import React from "react";
import { ProjectListScrens } from "screens/project-list/index";
import styled from "@emotion/styled";
import { Row } from "compoments/lib.tsx";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScrens />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main``;
