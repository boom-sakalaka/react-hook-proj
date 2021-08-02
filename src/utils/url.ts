/*
 * @Author: GZH
 * @Date: 2021-08-02 21:51:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-02 23:26:39
 * @FilePath: \jira\src\utils\url.ts
 * @Description:
 */

import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

// 返回页面url 指定键的值
export const useQueryQueryParam = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();

  return [
    useMemo(
      () =>
        keys.reduce((pre, key) => {
          return { ...pre, [key]: searchParam.get(key) || "" };
        }, {} as { [key in K]: string }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [searchParam]
    ),
    setSearchParam,
  ] as const;
};
