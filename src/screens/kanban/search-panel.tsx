/*
 * @Author: GZH
 * @Date: 2021-08-21 10:34:14
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-21 10:35:28
 * @FilePath: \react-hook-proj\src\screens\kanban\search-panel.tsx
 * @Description:
 */
import React from "react";
import { useTasksSearchParams } from "screens/kanban/util";
import { useSetUrlSearchParam } from "utils/url";
import { Row } from "compoments/lib";
import { Button, Input } from "antd";
import { UserSelect } from "compoments/user-select";
import { TaskTypeSelect } from "compoments/task-type-select";

export const SearchPanel = () => {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = () => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };

  return (
    <Row marginBottom={4} gap={true}>
      <Input
        style={{ width: "20rem" }}
        placeholder={"任务名"}
        value={searchParams.name}
        onChange={(evt) => setSearchParams({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName={"经办人"}
        value={searchParams.processorId}
        onChange={(value) => setSearchParams({ processorId: value })}
      />
      <TaskTypeSelect
        defaultOptionName={"类型"}
        value={searchParams.typeId}
        onChange={(value) => setSearchParams({ typeId: value })}
      />
      <Button onClick={reset}>清除筛选器</Button>
    </Row>
  );
};
