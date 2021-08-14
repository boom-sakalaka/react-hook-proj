/*
 * @Author: GZH
 * @Date: 2021-08-03 22:11:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-08 10:06:47
 * @FilePath: \react-hook-proj\src\screens\project-list\util.ts
 * @Description:
 */

import { useMemo } from "react";
import { useProject } from "utils/project";
import { useQueryQueryParam, useSetUrlSearchParam } from "utils/url";

export const useProjectsQueryKey = () => {
  const [params] = useProjectsSearchParams();
  return ["projects", params];
};

export const useProjectsSearchParams = () => {
  const [param, setParam] = useQueryQueryParam(["name", "personId"]);

  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useQueryQueryParam([
    "projectCreate",
  ]);
  const [{ editingProjectId }, setEditingProjectId] = useQueryQueryParam([
    "editingProjectId",
  ]);
  const setUrlParams = useSetUrlSearchParam();
  const { data: editingProject, isLoading } = useProject(
    Number(editingProjectId)
  );

  const open = () => setProjectCreate({ projectCreate: true });
  const close = () => setUrlParams({ projectCreate: "", editingProjectId: "" });
  const startEdit = (id: number) =>
    setEditingProjectId({ editingProjectId: id });

  return {
    projectModalOpen: projectCreate === "true" || Boolean(editingProjectId),
    open,
    close,
    startEdit,
    editingProject,
    isLoading,
  };
};
