import { IsMatch, AnyObj } from "../interfaces";
import treeFinds, { TreeFindOptions } from "../treeFinds";

/**
 * Tree Find
 * 默认使用广度优先算法, 只返回一个目标节点
 * @param treeData
 * @param isMatch
 * @param options
 * @returns
 */
export function treeFind<T extends AnyObj>(
  treeData: T[],
  isMatch: IsMatch<T>,
  options: TreeFindOptions = {}
): T | undefined {
  return treeFinds(treeData, isMatch, options)[0];
}

export default treeFind;
