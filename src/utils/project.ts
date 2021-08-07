/*
 * @Author: your name
 * @Date: 2021-05-20 22:23:16
 * @LastEditTime: 2021-08-07 11:32:11
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\utils\project.ts
 */

import { useCallback, useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  const fetchProject = useCallback(
    () => client("projects", { data: cleanObject(param) }),
    [client, param]
  );
  useEffect(() => {
    run(fetchProject(), {
      retry: fetchProject,
    });
  }, [param, run, fetchProject]);

  return result;
};

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();

  const mutate = (param: Partial<Project>) => {
    return run(
      client(`projects/${param.id}`, {
        data: param,
        method: "PATCH",
      })
    );
  };

  return {
    mutate,
    ...asyncResult,
  };
};
export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();

  const mutate = (param: Partial<Project>) => {
    return run(
      client(`projects/${param.id}`, {
        data: param,
        method: "POST",
      })
    );
  };

  return {
    mutate,
    ...asyncResult,
  };
};
