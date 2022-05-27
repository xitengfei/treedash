import { IsMatch, BaseOptions, AnyObj } from "../interfaces";
import { isTypeOf } from "../../utils";

interface IOptions extends BaseOptions {
  algorithm?: "BFS" | "DFS";
}

/**
 * Tree Find
 * 使用广度优先算法, 只返回一个目标节点
 * @param treeData
 * @param isMatch
 * @param options
 * @returns
 */
const treeFind = function <T extends AnyObj>(
  treeData: T[],
  isMatch: IsMatch<T>,
  options: IOptions = {}
): T | undefined {
  // check params
  if (!isTypeOf(treeData, "array")) return undefined;
  if (!isTypeOf(isMatch, "function")) return undefined;

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
): T | undefined {
  let matched = nodes.find(isMatch);
  if (matched) return matched;
  for (let i = 0; i < nodes.length; i++) {
    if (visited.has(nodes[i])) continue;
    visited.add(nodes[i]);
    matched = findBFS(nodes[i][childKey] || [], isMatch, childKey, visited);
    if (matched) return matched;
  }
  return undefined;
}

/** 深度优先算法 */
function findDFS<T extends AnyObj>(
  nodes: T[],
  isMatch: IsMatch<T>,
  childKey: string,
  visited: Set<T> = new Set()
): T | undefined {
  for (let i = 0; i < nodes.length; i++) {
    if (visited.has(nodes[i])) continue;
    if (isMatch(nodes[i])) return nodes[i];
    visited.add(nodes[i]);
    let matched = findDFS(nodes[i][childKey] || [], isMatch, childKey, visited);
    if (matched) return matched;
  }
  return undefined;
}

export default treeFind;
