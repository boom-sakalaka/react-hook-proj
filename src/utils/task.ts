/*
 * @Author: GZH
 * @Date: 2021-08-12 21:43:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-12 21:45:13
 * @FilePath: \jira\src\utils\task.ts
 * @Description:
 */
import { useHttp } from "utils/http";
import { useQuery } from "react-query";
import { Task } from "types/task";

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();

  return useQuery<Task[]>(["tasks", param], () =>
    client("tasks", { data: param })
  );
};
