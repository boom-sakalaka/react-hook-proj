/*
 * @Author: your name
 * @Date: 2021-05-20 22:23:16
 * @LastEditTime: 2021-08-03 23:21:39
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\utils\project.ts
 */

import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    run(client("projects", { data: cleanObject(param) }));
    // eslint-disable-next-line
  }, [param]);

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
