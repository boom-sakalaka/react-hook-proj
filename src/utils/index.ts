/*
 * @Author: your name
 * @Date: 2021-05-13 22:40:03
 * @LastEditTime: 2021-05-16 21:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\utils\index.js
 */

import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// 在一个函数里 改变传入的参数对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
type fnc = () => void;
// eslint-disable-next-line
export const useMount = (callback: fnc) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// type useDebounceFnc = <V>(value:V,delay?: number) => V
// export const useDebounce : useDebounceFnc = (value, delay) => {
//   const [debounceValue, setDebounceValue] = useState(value);
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebounceValue(value);
//     }, delay);
//     return () => clearTimeout(timeout);
//   }, [value, delay]);
//   return debounceValue;
// };

// 两种写法
export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
