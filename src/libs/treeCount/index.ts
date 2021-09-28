import {
  AnyObj,
  BaseOptions
} from '../interfaces';

/**
 * treeData计算总节点个数，包括父节点
 * @param treeData 
 * @param options 
 * @returns 
 */
const treeCount = function (treeData: Array<AnyObj>, options: BaseOptions = {}): number {
  if (!treeData || !Array.isArray(treeData)) return 0;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<AnyObj>): number{
    return nodes.reduce((total, current) => {
      if (current[childKey] && current[childKey].length) {
        return total + 1 + loop(current[childKey]);
      } else {
        return total + 1;
      }
    }, 0);
  };

  return loop(treeData);
};

export default treeCount;