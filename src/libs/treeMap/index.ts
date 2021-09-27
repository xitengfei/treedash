import {
  AnyObj, 
  TreeIterator,
  BaseOptions
} from '../interfaces';
import {isTypeOf} from '../../utils';

/**
 * loop through data trees
 */
const treeMap = function<T extends AnyObj>(treeData: Array<T>, iterator: TreeIterator<T>, options: BaseOptions = {}): Array<T>{
  // check params
  if (!isTypeOf(treeData, 'array')) return treeData;
  if (!isTypeOf(iterator, 'function')) return treeData;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<T>, parent?: T): Array<T>{
    return nodes.map((node) => {
      let nextNode = iterator(node, parent);

      // run next loop using next node  
      if (nextNode[childKey] && nextNode[childKey].length) {
        return {
          ...nextNode,
          [childKey]: loop(nextNode[childKey], nextNode),
        };
      } else {
        return nextNode;
      }
    });
  }

  return loop(treeData);
};

export default treeMap;