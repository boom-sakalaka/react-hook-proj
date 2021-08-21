/*
 * @Author: GZH
 * @Date: 2021-08-02 21:01:57
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 12:13:55
 * @FilePath: \react-hook-proj\src\screens\kanban\index.tsx
 * @Description:
 */

import React from "react";
import { useDocumentTitle } from "utils";
import { useKanbans } from "utils/kanban";
import { useProjectInUrl, useTasksSearchParams } from "screens/kanban/util";
import { KanbanColumn } from "./kanban-column";
import styled from "@emotion/styled";
import { SearchPanel } from "./search-panel";
import { useTasks } from "utils/task";
import { Spin } from "antd";
import { CreateKanban } from "./create-kanban";
import { TaskModal } from "./task-modal";

export function KanbanScreen() {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans, isLoading: kanbanIsLoading } = useKanbans(
    useTasksSearchParams()
  );

  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = kanbanIsLoading || taskIsLoading;
  return (
    <div style={{ paddingLeft: "30px" }}>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <ColumnsContainer>
          {kanbans?.map((kanban) => (
            <KanbanColumn key={kanban.id} kanban={kanban} />
          ))}
          <CreateKanban />
        </ColumnsContainer>
      )}
      <TaskModal />
    </div>
  );
}

const ColumnsContainer = styled.div`
  display: flex;
  /* overflow: scroll; */
  margin-right: 2rem;
`;
