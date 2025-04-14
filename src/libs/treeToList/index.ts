import { AnyObj, BaseOptions, TreeMapIterator } from "../interfaces";
import treeMap from "../treeMap";
import { isTypeOf } from "../../utils";

/**
 * 树形转换为数组
 * @param {T[]} treeData 树形数据源
 */
export function treeToList<T extends AnyObj, R extends AnyObj = T>(
  treeData: T[]
): R[];
/**
 * 树形转换为数组
 * @param {T[]} treeData 树形数据源
 * @param {TreeMapIterator<T, R | false>} iterator 迭代器，用来转换每个节点，如果返回false，则忽略该节点
 */
export function treeToList<T extends AnyObj, R extends AnyObj = T>(
  treeData: T[],
  iterator: TreeMapIterator<T, R | false>
): R[];
/**
 * 树形转换为数组
 * @param {T[]} treeData 树形数据源
 * @param {BaseOptions} options 其它选项
 */
export function treeToList<T extends AnyObj, R extends AnyObj = T>(
  treeData: T[],
  options: BaseOptions
): R[];
/**
 * 树形转换为数组
 * @param {T[]} treeData 树形数据源
 * @param {TreeMapIterator<T, R | false>} iterator 迭代器，用来转换每个节点，如果返回false，则忽略该节点
 * @param {BaseOptions} options 其它选项
 */
export function treeToList<T extends AnyObj, R extends AnyObj = T>(
  treeData: T[],
  iterator: TreeMapIterator<T, R | false>,
  options: BaseOptions
): R[];
export function treeToList<T extends AnyObj, R extends AnyObj = T>(
  treeData: T[],
  iterator?: TreeMapIterator<T, R | false> | BaseOptions,
  options?: BaseOptions
): R[] {
  // check params
  if (!isTypeOf(treeData, "array")) return [];
  if (typeof iterator !== "function" && options === undefined) {
    options = iterator as any;
    iterator = undefined;
  }

  const { childKey = "children" } = options || {};

  let list: R[] = [];
  treeMap(
    treeData,
    (node: T, parent?: R | false) => {
      let item = { ...node };
      delete item[childKey]; // remove children
      const result =  typeof iterator === "function" ? iterator(item, parent) : ((item as unknown) as R);
      if (result !== false) list.push(result);
      return node as unknown as R;
    },
    options
  );
  return list;
}

export default treeToList;
