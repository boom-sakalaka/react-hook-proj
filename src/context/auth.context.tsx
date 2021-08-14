/*
 * @Author: your name
 * @Date: 2021-05-15 15:45:29
 * @LastEditTime: 2021-08-08 10:46:56
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\context\auth.context.tsx
 */
import React, { ReactNode } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
import { useMount } from "utils";
import { useAsync } from "utils/use-async";
import { FullPageErrorFallBack, FullPageLoading } from "compoments/lib";
import { useQueryClient } from "react-query";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext =
  React.createContext<
    | {
        user: User | null;
        login: (form: AuthForm) => Promise<void>;
        register: (form: AuthForm) => Promise<void>;
        logout: () => Promise<void>;
      }
    | undefined
  >(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null);
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();
  const queryClient = useQueryClient();
  // point free 消参
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (from: AuthForm) => auth.register(from).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      queryClient.clear();
    });

  useMount(() => {
    run(bootstrapUser());
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallBack error={error} />;
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};
