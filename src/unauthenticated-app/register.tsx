/*
 * @Author: your name
 * @Date: 2021-05-15 14:01:24
 * @LastEditTime: 2021-05-21 22:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\login\index.tsx
 */
import React from "react";
import { useAuth } from "context/auth.context";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app/index";
import { useAsync } from "utils/use-async";

export interface paramProps {
  username: string;
  password: string;
}

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  console.log(user);
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    cpassword: string;
    username: string;
    password: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("请确认两次输入的密码相同"));
      return;
    }
    try {
      await run(register(values));
    } catch (e) {
      onError(e);
    }
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
        <Form.Item
          name="cpassword"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="确认密码" type="password" id="cpassword" />
        </Form.Item>
        <Form.Item>
          <LongButton loading={isLoading} htmlType="submit" type="primary">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </div>
  );
};
