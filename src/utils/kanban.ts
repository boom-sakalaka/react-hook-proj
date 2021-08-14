/*
 * @Author: GZH
 * @Date: 2021-08-12 21:41:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-12 21:44:20
 * @FilePath: \jira\src\utils\kanban.ts
 * @Description:
 */
import { useHttp } from "utils/http";
import { useQuery } from "react-query";
import { Kanban } from "types/kanban";

export const useKanbans = (param?: Partial<Kanban>) => {
  const client = useHttp();

  return useQuery<Kanban[]>(["kanbans", param], () =>
    client("kanbans", { data: param })
  );
};
