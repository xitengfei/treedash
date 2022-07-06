import { IsMatch, AnyObj, BaseOptions } from "../interfaces";
import { isTypeOf } from "../../utils";

/**
 * Search In Data Tree（返回完整树结构）
 * @param treeData
 * @param isMatch
 * @param options
 * @returns
 */
const treeSearch = function <T extends AnyObj>(
  treeData: Array<T>,
  isMatch: IsMatch<T>,
  options: BaseOptions = {}
): Array<T> {
  // check params
  if (!isTypeOf(treeData, "array")) return [];
  if (!isTypeOf(isMatch, "function")) return [];

  const { childKey = "children" } = options;

  const loop = function (nodes: Array<T>) {
    let matchNodes: Array<T> = [];

    nodes.forEach((node) => {
      let childs: Array<T> = [];
      if (node[childKey] && node[childKey].length) {
        childs = loop(node[childKey]);
      }

      if (childs.length) {
        // add matched childs only
        const newNode = { ...node, [childKey]: childs };
        matchNodes.push(newNode);
      } else if (isMatch(node)) {
        // 这里如果子节点中已经有匹配了，则该节点本身就已经属于要返回的结果集了，因此不用再做判断，如果子节点没有匹配，才需要判断该节点本身是否匹配
        let newNode = { ...node };
        delete newNode[childKey];
        matchNodes.push(newNode);
      }
    });

    return matchNodes;
  };

  return loop(treeData);
};

export default treeSearch;
