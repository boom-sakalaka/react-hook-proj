/*
 * @Author: your name
 * @Date: 2021-05-13 22:40:03
 * @LastEditTime: 2021-05-13 23:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\utils\index.js
 */
import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
export const isVoid = (value) =>
  value === undefined || value === null || value === "";
// 在一个函数里 改变传入的参数对象本身是不好的
export const cleanObject = (objcet) => {
  const result = { ...objcet };
  Object.keys(objcet).forEach((key) => {
    const value = objcet[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// eslint-disable-next-line
export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
