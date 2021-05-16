/*
 * @Author: your name
 * @Date: 2021-05-16 19:59:16
 * @LastEditTime: 2021-05-16 20:07:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jira\src\unauthenticated-app\index.tsx
 */
import React, { useState } from "react";
import { LoginScreen } from "unauthenticated-app/login";
import { RegisterScreen } from "unauthenticated-app/register";

export const UnauthenticatedApp = () => {
  const [isRegister, setRegisTer] = useState(false);
  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setRegisTer(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};
