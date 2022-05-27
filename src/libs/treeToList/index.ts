import { AnyObj, BaseOptions, TreeIterator } from "../interfaces";
import treeMap from "../treeMap";
import { isTypeOf } from "../../utils";

/**
 * 树形转换为数组
 * @param {*} node
 */
export const treeToList = function <T extends AnyObj, R = T>(
  treeData: T[],
  iterator?: TreeIterator<T, R>,
  options: BaseOptions = {}
): R[] {
  // check params
  if (!isTypeOf(treeData, "array")) return [];

  const { childKey = "children" } = options;

  let list: R[] = [];
  treeMap(
    treeData,
    (node: T, parent?: R) => {
      let item = { ...node };
      delete item[childKey]; // remove children
      const result = iterator
        ? iterator(item, parent)
        : ((item as unknown) as R);
      list.push(result);
      return result;
    },
    options
  );
  return list;
};

export default treeToList;
