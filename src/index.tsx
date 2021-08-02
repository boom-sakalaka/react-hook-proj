/*
 * @Author: your name
 * @Date: 2021-05-12 22:12:33
 * @LastEditTime: 2021-08-02 22:33:39
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\index.tsx
 */
import "./wdyr.ts";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadServer, DevTools } from "jira-dev-tool";
import "antd/dist/antd.less";

import { AppProviders } from "context";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
