/*
 * @Author: GZH
 * @Date: 2021-08-03 22:17:21
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-03 22:17:33
 * @FilePath: \jira\src\compoments\user-select.tsx
 * @Description:
 */
import React from "react";
import { useUsers } from "utils/user";
import { IdSelect } from "compoments/id-select";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useUsers();
  return <IdSelect options={users || []} {...props} />;
};
