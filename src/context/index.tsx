/*
 * @Author: your name
 * @Date: 2021-05-15 16:15:58
 * @LastEditTime: 2021-05-19 23:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\context\index.tsx
 */

import { ReactNode } from "react";
import { AuthProvider } from "./auth.context";
import { QueryClient, QueryClientProvider } from "react-query";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};
