import {
  Node, 
  IsMatchFn,
  ITreeOptions
} from '../interfaces';

/**
 * Find Parent of A Node
 * @param {*} nodes
 * @param {*} matchFn
 */
const treeFindParent = function (treeData: Node, matchFn: IsMatchFn, options: ITreeOptions = {}): Node|null{
  if (!treeData || !Array.isArray(treeData)) return null;
  if ('function' !== typeof matchFn) return treeData;

  const {
    childKey = 'children'
  } = options;

  const recurser = function(node: Node): Node|null{
    for (let child of node[childKey]) {
      let target = null;
      if (matchFn(child)) {
        target = node;
      } else if(child[childKey]){
        target = recurser(child);
      }
      if (target) return target;
    }
    return null;
  }

  return recurser(treeData);
};

export default treeFindParent;