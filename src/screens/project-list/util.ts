/*
 * @Author: GZH
 * @Date: 2021-08-03 22:11:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 18:08:08
 * @FilePath: \react-hook-proj\src\screens\project-list\util.ts
 * @Description:
 */

import { useCallback, useMemo } from "react";
import { useQueryQueryParam } from "utils/url";

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

  const open = useCallback(
    () => setProjectCreate({ projectCreate: true }),
    [setProjectCreate]
  );
  const close = useCallback(
    () => setProjectCreate({ projectCreate: false }),
    [setProjectCreate]
  );

  return {
    projectModalOpen: projectCreate === "true",
    open,
    close,
  };
};
