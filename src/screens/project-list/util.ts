/*
 * @Author: GZH
 * @Date: 2021-08-03 22:11:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-03 22:21:46
 * @FilePath: \jira\src\screens\project-list\util.ts
 * @Description:
 */

import { useMemo } from "react";
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
