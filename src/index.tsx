/*
 * @Author: your name
 * @Date: 2021-05-12 22:12:33
 * @LastEditTime: 2021-05-15 15:14:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
