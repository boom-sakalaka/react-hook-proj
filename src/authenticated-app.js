/*
 * @Author: your name
 * @Date: 2021-05-16 19:58:40
 * @LastEditTime: 2021-05-16 20:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\authenticated-app.js
 */
import { useAuth } from "context/auth.context";
import React from "react";
import { ProjectListScrens } from "screens/project-list/index";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectListScrens />
      <button onClick={logout}>登出</button>
    </div>
  );
};
