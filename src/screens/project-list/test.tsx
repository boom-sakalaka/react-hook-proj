/*
 * @Author: your name
 * @Date: 2021-05-23 23:24:32
 * @LastEditTime: 2021-05-23 23:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\screens\project-list\test.tsx
 */
import React, { useEffect, useState } from "react";

export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);
  useEffect(() => {
    return () => {
      console.log(num);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <button onClick={add}>add</button>
      <p>number: {num}</p>
    </div>
  );
};
