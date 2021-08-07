/*
 * @Author: your name
 * @Date: 2021-05-13 21:08:49
 * @LastEditTime: 2021-08-07 14:27:03
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\screens\project-list\index.tsx
 */
import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce } from "utils";
import styled from "@emotion/styled";
import { Button, Row, Typography } from "antd";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";
// import { Helmet } from "react-helmet";
import { useDocumentTitle } from "utils";
import { useProjectsSearchParams } from "./util";
// import { Test } from "./test";

export const ProjectListScrens = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  useDocumentTitle("项目列表", false);
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProject(useDebounce(param, 1000));
  const { data: users } = useUsers();

  return (
    <Container>
      {/* <Test /> */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <Row justify="space-between">
        <h1>项目列表</h1>
        <Button
          onClick={() => {
            props.setProjectModalOpen(true);
          }}
        >
          创建项目
        </Button>
      </Row>

      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
        setProjectModalOpen={props.setProjectModalOpen}
      />
    </Container>
  );
};

ProjectListScrens.whyDidYouRender = false;

const Container = styled.div`
  padding-left: 3.2rem;
`;
