/*
 * @Author: your name
 * @Date: 2021-05-13 22:40:03
 * @LastEditTime: 2021-05-13 22:56:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\utils\index.js
 */

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
