/*
 * @Author: your name
 * @Date: 2021-05-13 21:08:49
 * @LastEditTime: 2021-08-03 00:09:16
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\project-list\index.tsx
 */
import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";
// import { Helmet } from "react-helmet";
import { useDocumentTitle } from "utils";
import { useQueryQueryParam } from "utils/url";
// import { Test } from "./test";

export const ProjectListScrens = () => {
  const [param, setParam] = useQueryQueryParam(["name", "personId"]);
  const deDounceParms = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProject(deDounceParms);
  const { data: users } = useUsers();
  useDocumentTitle("项目列表", false);
  return (
    <Container>
      {/* <Test /> */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

ProjectListScrens.whyDidYouRender = false;

const Container = styled.div`
  padding-left: 3.2rem;
`;
