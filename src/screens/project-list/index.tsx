/*
 * @Author: your name
 * @Date: 2021-05-13 21:08:49
 * @LastEditTime: 2021-08-07 21:54:24
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\screens\project-list\index.tsx
 */
import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce } from "utils";
import styled from "@emotion/styled";
import { Row } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
// import { Helmet } from "react-helmet";
import { useDocumentTitle } from "utils";
import { useProjectModal, useProjectsSearchParams } from "./util";
import { ButtonNoPadding, ErrorBox } from "compoments/lib";
// import { Test } from "./test";

export const ProjectListScrens = () => {
  useDocumentTitle("项目列表", false);
  const { open } = useProjectModal();
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
  } = useProjects(useDebounce(param, 1000));
  const { data: users } = useUsers();

  return (
    <Container>
      {/* <Test /> */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <Row justify="space-between">
        <h1>项目列表</h1>
        <ButtonNoPadding type="link" onClick={open}>
          创建项目
        </ButtonNoPadding>
      </Row>

      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? <ErrorBox error={error} /> : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

ProjectListScrens.whyDidYouRender = false;

const Container = styled.div`
  padding-left: 3.2rem;
`;
