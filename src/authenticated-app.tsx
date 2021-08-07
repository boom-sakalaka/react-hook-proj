/*
 * @Author: your name
 * @Date: 2021-05-16 19:58:40
 * @LastEditTime: 2021-08-07 14:18:10
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\authenticated-app.tsx
 */
import { useAuth } from "context/auth.context";
import React, { useCallback, useState } from "react";
import { ProjectListScrens } from "screens/project-list/index";
import styled from "@emotion/styled";
import { Row } from "compoments/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project/index";
import ProjectModal from "screens/project-list/project-modal";
import ProjectPopover from "compoments/project-popover";
export const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <Container>
      <PageHeader setProjectModalOpen={setProjectModalOpen} />
      <Main>
        {/* <ProjectListScrens /> */}
        <Router>
          <Routes>
            <Route
              path={"/projects"}
              element={
                <ProjectListScrens setProjectModalOpen={setProjectModalOpen} />
              }
            />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
            <Navigate to={"/projects"} />
          </Routes>
        </Router>
      </Main>
      <ProjectModal
        projectModalOpen={projectModalOpen}
        onClose={useCallback(() => {
          setProjectModalOpen(false);
        }, [])}
      />
    </Container>
  );
};

const PageHeader = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        <ProjectPopover setProjectModalOpen={props.setProjectModalOpen} />
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
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
