/*
 * @Author: GZH
 * @Date: 2021-08-15 21:03:21
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 10:33:37
 * @FilePath: \react-hook-proj\src\screens\kanban\util.ts
 * @Description:
 */

import { useMemo } from "react";
import { useLocation } from "react-router";
import { useDebounce } from "utils";
import { useProject } from "utils/project";
import { useQueryQueryParam } from "utils/url";

export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];
  return Number(id);
};
export const useProjectInUrl = () => useProject(useProjectIdInUrl());

export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() });

export const useKanbansQueryKey = () => ["kanbans", useKanbanSearchParams()];

export const useTasksSearchParams = () => {
  const [param, setParam] = useQueryQueryParam([
    "name",
    "typeId",
    "processorId",
    "tagId",
  ]);
  const projectId = useProjectIdInUrl();
  const debouncedName = useDebounce(param.name, 200);
  return useMemo(
    () => ({
      projectId,
      typeId: Number(param.typeId) || undefined,
      processorId: Number(param.processorId) || undefined,
      tagId: Number(param.tagId) || undefined,
      name: debouncedName,
    }),
    [projectId, param, debouncedName]
  );
};

export const useTaskQueryKey = () => ["tasks", useTasksSearchParams];
