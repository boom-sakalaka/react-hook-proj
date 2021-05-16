/*
 * @Author: your name
 * @Date: 2021-05-15 14:01:24
 * @LastEditTime: 2021-05-16 20:13:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\login\index.tsx
 */
import React, { FormEvent } from "react";
import { useAuth } from "context/auth.context";
export interface paramProps {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const { login, user, logout } = useAuth();
  console.log(user);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    // register({ username, password });
    login({ username, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};
