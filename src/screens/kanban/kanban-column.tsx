/*
 * @Author: GZH
 * @Date: 2021-08-15 21:12:36
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-15 21:36:26
 * @FilePath: \jira\src\screens\kanban\kanban-column.tsx
 * @Description:
 */

import React from "react";
import { Kanban } from "types/kanban";
import { useTasks } from "utils/task";
import { useTasksSearchParams } from "./util";

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);
  return (
    <div>
      <h3>{kanban.name}</h3>
      {tasks?.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};
