/*
 * @Author: your name
 * @Date: 2021-05-15 14:01:24
 * @LastEditTime: 2021-05-17 22:32:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\login\index.tsx
 */
import React from "react";
import { useAuth } from "context/auth.context";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app/index";

export interface paramProps {
  username: string;
  password: string;
}

export const RegisterScreen = () => {
  const { register, user } = useAuth();
  console.log(user);
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="用户名" type="text" id="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="密码" type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <LongButton htmlType="submit" type="primary">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </div>
  );
};
