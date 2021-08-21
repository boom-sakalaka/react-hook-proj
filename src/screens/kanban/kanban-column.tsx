/*
 * @Author: GZH
 * @Date: 2021-08-15 21:12:36
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 10:42:27
 * @FilePath: \react-hook-proj\src\screens\kanban\kanban-column.tsx
 * @Description:
 */

import React from "react";
import { Kanban } from "types/kanban";
import { useTasks } from "utils/task";
import { useTasksSearchParams } from "./util";
import { useTaskTypes } from "utils/task-type";
import taskIcon from "assets/task.svg";
import bugIcon from "assets/bug.svg";
import styled from "@emotion/styled";
import { Card } from "antd";

const TaskTypeIcon = ({ id }: { id: number }) => {
  const { data: taskTypes } = useTaskTypes();
  const name = taskTypes?.find((taskType) => taskType.id === id)?.name;
  if (!name) {
    return null;
  }
  return <img alt={"task-icon"} src={name === "task" ? taskIcon : bugIcon} />;
};

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);
  return (
    <Container>
      <h3>{kanban.name}</h3>
      {tasks?.map((task) => (
        <TasksContainer key={task.id}>
          <Card style={{ marginBottom: "0.5rem" }}>
            <div>{task.name}</div>
            <TaskTypeIcon id={task.typeId} />
          </Card>
        </TasksContainer>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  overflow: scroll;
  flex: 1;

  ::-webkit-scrollbar {
    display: none;
  }
`;
