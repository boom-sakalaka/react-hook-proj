import { User } from "screens/project-list/search-panel";
import { useMount } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

/*
 * @Author: your name
 * @Date: 2021-05-20 22:31:02
 * @LastEditTime: 2021-05-20 22:36:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\utils\user.ts
 */
export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useMount(() => {
    run(client("users"));
  });

  return result;
};
