import { AnyObj, BaseOptions } from "../interfaces";
import { isTypeOf } from "../../utils";
import type { ListIteratee } from "lodash";
import { sortBy } from "lodash";

/**
 * Sort a tree（对树进行排序，并返回一个新树）
 * @param treeData 树形数据
 * @param iteratee 排序字段名或 iteratee 函数返回节点的排序值
 * @param options
 * @returns
 */
const treeSort = function <T extends AnyObj>(
  treeData: T[],
  iteratee: ListIteratee<T>,
  options: BaseOptions = {}
): T[] {
  // check params
  if (!isTypeOf(treeData, "array")) return [];

  const { childKey = "children" } = options;

  const loop = function (nodes: T[]) {
    const sortedNodes: T[] = sortBy(nodes, iteratee);
    sortedNodes.forEach((node) => {
      if (node[childKey]?.length) {
        // @ts-ignore: 访问子树
        node[childKey] = loop(node[childKey]);
      }
    });
    return sortedNodes;
  };

  return loop(treeData);
};

export default treeSort;
