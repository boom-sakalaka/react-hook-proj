/*
 * @Author: your name
 * @Date: 2021-05-13 21:10:49
 * @LastEditTime: 2021-08-03 22:20:19
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\project-list\search-panel.tsx
 */
import React from "react";
import { Form, Input, Select } from "antd";
import { Project } from "./list";
import { UserSelect } from "compoments/user-select";
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"负责人"}
          value={param.personId}
          onChange={(value) => {
            setParam({ ...param, personId: value });
          }}
        />
      </Form.Item>
    </Form>
  );
};
