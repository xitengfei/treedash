import { AnyObj, TreeMapIterator, BaseOptions } from "../interfaces";
import { isTypeOf } from "../../utils";

/**
 * 遍历树
 * @param {T[]} treeData 树形数据源
 * @param {TreeMapIterator<T, R | false>} iterator 迭代器，用来转换每个节点，如果返回false，则忽略该节点
 * @param {BaseOptions} options 其它选项
 */
export function treeMap<T extends AnyObj, R = T>(
  treeData: T[],
  iterator: TreeMapIterator<T, R | false>,
  options: BaseOptions = {}
): R[] {
  // check params
  if (!isTypeOf(treeData, "array")) return (treeData as unknown) as R[];
  if (typeof iterator !== "function") return (treeData as unknown) as R[];

  const { childKey = "children" } = options;

  const loop = function (nodes: T[], parent?: R): R[] {
    return nodes
      .map<R>((node) => {
        const nextNode = iterator(node, parent);
        if (nextNode === false) {
          return undefined!;
        }
        const children = node[childKey];

        // run next loop using next node
        if (Array.isArray(children) && children.length > 0) {
          return {
            ...nextNode,
            [childKey]: loop(children, nextNode),
          };
        } else {
          return nextNode;
        }
      })
      .filter(Boolean);
  };

  return loop(treeData);
}

export default treeMap;
