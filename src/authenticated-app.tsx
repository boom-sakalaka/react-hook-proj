/*
 * @Author: your name
 * @Date: 2021-05-16 19:58:40
 * @LastEditTime: 2021-05-27 21:41:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\authenticated-app.js
 */
import { useAuth } from "context/auth.context";
import React from "react";
import { ProjectListScrens } from "screens/project-list/index";
import styled from "@emotion/styled";
import { Row } from "compoments/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <ProjectListScrens />
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding-left: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main``;
