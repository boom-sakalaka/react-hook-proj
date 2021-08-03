/*
 * @Author: GZH
 * @Date: 2021-08-03 23:05:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-03 23:11:10
 * @FilePath: \jira\src\compoments\pin.tsx
 * @Description:
 */
import React from "react";
import { Rate } from "antd";

interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheackChange?: (checked: boolean) => void;
}

export default function Pin(props: PinProps) {
  const { checked, onCheackChange, ...restProps } = props;

  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheackChange?.(!!num)}
      {...restProps}
    />
  );
}
