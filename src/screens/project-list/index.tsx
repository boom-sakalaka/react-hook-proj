/*
 * @Author: your name
 * @Date: 2021-05-13 21:08:49
 * @LastEditTime: 2021-05-19 22:17:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\project-list\index.tsx
 */
import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

export const ProjectListScrens = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  const deDounceParms = useDebounce(param, 200);

  useEffect(() => {
    client("projects", { data: cleanObject(deDounceParms) }).then(setList);
    // eslint-disable-next-line
  }, [deDounceParms]);

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding-left: 3.2rem;
`;
