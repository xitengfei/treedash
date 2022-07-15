import { IsMatch, BaseOptions, AnyObj } from "../interfaces";
import { isTypeOf } from "../../utils";

export interface TreeFindOptions extends BaseOptions {
  algorithm?: "BFS" | "DFS";
}

/**
 * 默认使用广度优先算法，查找并返回所有符合条件的节点
 * @param treeData
 * @param isMatch
 * @param options
 * @returns
 */
const treeFinds = function <T extends AnyObj>(
  treeData: T[],
  isMatch: IsMatch<T>,
  options: TreeFindOptions = {}
): T[] {
  // check params
  if (!isTypeOf(treeData, "array")) return [];
  if (!isTypeOf(isMatch, "function")) return [];

  const { childKey = "children", algorithm = "BFS" } = options;

  if ("BFS" === algorithm) {
    return findBFS(treeData, isMatch, childKey);
  } else {
    return findDFS(treeData, isMatch, childKey);
  }
};

/** 广度优先算法 */
function findBFS<T extends AnyObj>(
  nodes: T[],
  isMatch: IsMatch<T>,
  childKey: string,
  visited: Set<T> = new Set()
): T[] {
  const results: T[] = [];
  results.push(...nodes.filter(isMatch));
  for (let i = 0; i < nodes.length; i++) {
    if (visited.has(nodes[i])) continue;
    visited.add(nodes[i]);
    results.push(
      ...findBFS(nodes[i][childKey] || [], isMatch, childKey, visited)
    );
  }
  return results;
}

/** 深度优先算法 */
function findDFS<T extends AnyObj>(
  nodes: T[],
  isMatch: IsMatch<T>,
  childKey: string,
  visited: Set<T> = new Set()
): T[] {
  const results: T[] = [];
  for (let i = 0; i < nodes.length; i++) {
    if (visited.has(nodes[i])) continue;
    if (isMatch(nodes[i])) {
      results.push(nodes[i]);
      continue;
    }
    visited.add(nodes[i]);
    results.push(
      ...findDFS(nodes[i][childKey] || [], isMatch, childKey, visited)
    );
  }
  return results;
}

export default treeFinds;
