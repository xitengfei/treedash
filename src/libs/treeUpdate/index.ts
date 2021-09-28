import {
  AnyObj,
  IsMatch,
  TreeIterator,
  BaseOptions
} from '../interfaces';
import { isTypeOf } from '../../utils';

interface IOptions extends BaseOptions {
  greedy?: boolean; // 是否贪婪匹配
}

/**
 * Update Tree Nodes
 * @param treeData 
 * @param isMatch 
 * @param updateFn 
 * @param options 
 * @returns 
 */
const treeUpdate = function <T extends AnyObj>(treeData: Array<T>, isMatch: IsMatch<T>, updateFn: TreeIterator<T>, options: IOptions = {}): Array<T> {
  // check params
  if (!isTypeOf(treeData, 'array')) return treeData;
  if (!isTypeOf(isMatch, 'function') || !isTypeOf(updateFn, 'function')) return treeData;

  const {
    childKey = 'children',
    greedy = false,
  } = options;

  const loop = function (nodes: Array<T>): Array<T> {
    return nodes.map((node: T) => {
      if (isMatch(node)) {
        const newNode = updateFn(node);

        if (node[childKey] && greedy) {
          return { ...newNode, [childKey]: loop(node[childKey]) }
        }
        return newNode;
      } else {
        if (node[childKey]) {
          return { ...node, [childKey]: loop(node[childKey]) };
        }
        return node;
      }
    });
  }

  return loop(treeData);
};

export default treeUpdate;