/*
 * @Author: your name
 * @Date: 2021-05-15 16:15:58
 * @LastEditTime: 2021-05-15 16:24:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\context\index.tsx
 */

import { ReactNode } from "react";
import { AuthProvider } from "./auth.context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
