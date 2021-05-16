/*
 * @Author: your name
 * @Date: 2021-05-12 22:12:33
 * @LastEditTime: 2021-05-16 20:12:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-reack-hook\jira\src\App.tsx
 */
import React from "react";
import "./App.css";
// import { ProjectListScrens } from "screens/project-list";
import { useAuth } from "context/auth.context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
