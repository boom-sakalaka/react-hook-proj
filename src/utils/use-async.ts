import { useState } from "react";

/*
 * @Author: your name
 * @Date: 2021-05-20 21:39:47
 * @LastEditTime: 2021-08-07 10:50:23
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \react-hook-proj\src\utils\use-async.ts
 */
interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}
const defaultInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};
export const useAsync = <D>(
  initialState?: State<D>,
  initialConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initialConfig };
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });
  const setData = (data: D) => setState({ data, stat: "success", error: null });
  const setError = (error: Error) =>
    setState({ error, stat: "error", data: null });

  const [retry, setRetry] = useState(() => () => {});

  // run 用来触发异步请求
  const run = (
    promise: Promise<D>,
    runConfig?: { retry: () => Promise<D> }
  ) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 Promise 类型数据");
    }
    setState({ ...state, stat: "loading" });

    setRetry(() => () => {
      if (runConfig?.retry) {
        run(runConfig?.retry(), runConfig);
      }
    });

    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((e) => {
        setError(e);
        if (config.throwOnError) return Promise.reject(e);
        return e;
      });
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    retry,
    run,
    setData,
    setError,
    ...state,
  };
};
