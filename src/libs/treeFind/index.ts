import { IsMatch, AnyObj } from "../interfaces";
import treeFinds, { TreeFindOptions } from "../treeFinds";

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
  options: TreeFindOptions = {}
): T | undefined {
  return treeFinds(treeData, isMatch, options)[0];
};

export default treeFind;
