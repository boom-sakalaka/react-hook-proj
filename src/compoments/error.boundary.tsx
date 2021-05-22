/*
 * @Author: your name
 * @Date: 2021-05-21 22:51:23
 * @LastEditTime: 2021-05-22 23:07:57
 * @LastEditors: Please set LastEditors
 * @Description: 捕捉边界错误
 * @FilePath: \jira\src\compoments\error.boundary.tsx
 */
import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
