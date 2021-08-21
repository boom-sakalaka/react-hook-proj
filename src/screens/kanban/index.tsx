/*
 * @Author: GZH
 * @Date: 2021-08-02 21:01:57
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 10:39:57
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

export default function KanbanScreen() {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans } = useKanbans(useTasksSearchParams());
  return (
    <div>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      <ColumnsContainer>
        {kanbans?.map((kanban) => (
          <KanbanColumn key={kanban.id} kanban={kanban} />
        ))}
      </ColumnsContainer>
    </div>
  );
}

const ColumnsContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-right: 2rem;
`;
