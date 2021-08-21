/*
 * @Author: GZH
 * @Date: 2021-08-21 10:34:43
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 10:34:58
 * @FilePath: \react-hook-proj\src\compoments\task-type-select.tsx
 * @Description:
 */
import React from "react";
import { IdSelect } from "compoments/id-select";
import { useTaskTypes } from "utils/task-type";

export const TaskTypeSelect = (
  props: React.ComponentProps<typeof IdSelect>
) => {
  const { data: taskTypes } = useTaskTypes();
  return <IdSelect options={taskTypes || []} {...props} />;
};
