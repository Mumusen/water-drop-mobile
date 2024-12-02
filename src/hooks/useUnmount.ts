import { useEffect } from "react";
import useLatest from "./useLatest";
/**
 * @description: 组件卸载时运行
 * @param {function} fn
 * @return {*}
 */
const useUnmount = (fn: () => void) => { 
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), [])
};
export default useUnmount;