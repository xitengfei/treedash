import { AnyObj, TreeIterator, BaseOptions } from "../interfaces";
import { isTypeOf } from "../../utils";

/**
 * loop through data trees
 */
const treeMap = function <T extends AnyObj, R = T>(
  treeData: T[],
  iterator: TreeIterator<T, R>,
  options: BaseOptions = {}
): R[] {
  // check params
  if (!isTypeOf(treeData, "array")) return (treeData as unknown) as R[];
  if (!isTypeOf(iterator, "function")) return (treeData as unknown) as R[];

  const { childKey = "children" } = options;

  const loop = function (nodes: T[], parent?: R): R[] {
    return nodes.map((node) => {
      const nextNode = iterator(node, parent);
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
    });
  };

  return loop(treeData);
};

export default treeMap;
