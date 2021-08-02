/*
 * @Author: your name
 * @Date: 2021-05-27 21:48:39
 * @LastEditTime: 2021-08-02 21:06:58
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\project\index.tsx
 */
import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import KanbanScreen from "screens/kanban";
import EpicScreen from "screens/epic";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>PorjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"/kanban"} element={<KanbanScreen />} />
        <Route path={"/epic"} element={<EpicScreen />} />
        <Navigate to={window.location.pathname + "/kanban"} />
      </Routes>
    </div>
  );
};
