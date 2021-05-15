/*
 * @Author: your name
 * @Date: 2021-05-12 22:12:33
 * @LastEditTime: 2021-05-15 14:05:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-reack-hook\jira\src\App.tsx
 */
import React from "react";
import "./App.css";
// import { ProjectListScrens } from "screens/project-list";
import { LoginScreen } from "screens/login/index";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScrens /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
