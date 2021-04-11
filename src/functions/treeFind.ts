import {
  Node, 
  IsMatchFn,
  ITreeOptions
} from '../interfaces';

/**
 * Find Tree Node
 * @param {*} nodes
 * @param {*} matchFn the funciton to find target node
 */
const treeFind = function(treeData: Array<Node>, matchFn: IsMatchFn, options: ITreeOptions = {}): Node|null{
  if (!treeData || !Array.isArray(treeData)) return null;
  if ('function' !== typeof matchFn) return null;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<Node>): Node | null{
    for (let node of nodes) {
      let target = null;
      if (matchFn(node)) {
        target = node;
      } else if (node[childKey]) {
        target = loop(node[childKey]);
      }
      if (target) return target;
    }
    return null;
  }

  return loop(treeData);
};

export default treeFind;