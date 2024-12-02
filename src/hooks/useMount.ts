import { useEffect } from "react";
/**
 * @description: 组件加载时运行
 * @param {function} fn
 * @return {*}
 */
const useMount = (fn: () => void) => {

  useEffect(() => {
    fn?.();
  }, [])
};
export default useMount;