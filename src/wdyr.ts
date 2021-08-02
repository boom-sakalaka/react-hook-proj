/*
 * @Author: GZH
 * @Date: 2021-08-02 22:12:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-02 22:27:40
 * @FilePath: \jira\src\wdyr.ts
 * @Description:
 */
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}
