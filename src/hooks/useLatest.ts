import { useRef } from "react";
/**
 * @description: 获取最新 value
 * @param {*} T
 * @return {*}
 */
const useLatest = <T> (value: T) => {

  const ref = useRef(value);
  ref.current = value;
  return ref
};
export default useLatest;