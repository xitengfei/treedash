import {
  Node, 
  IsMatchFn,
  ITreeOptions
} from '../interfaces';

/**
 * Find Parent of A Node
 * find类方法的目标是 找到一个目标即返回
 * @param {*} nodes
 * @param {*} matchFn
 */
const treeFindParent = function (treeData: Node, matchFn: IsMatchFn, options: ITreeOptions = {}): Node|null{
  if (!treeData || !Array.isArray(treeData)) return null;
  if ('function' !== typeof matchFn) return treeData;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<Node>, parent: Node|null = null): Node|null{
    for(let node of nodes){
      let target = null;
      if(matchFn(node)){
        target = parent;
      } else if(node[childKey]){
        target = loop(node[childKey], node);
      }

      if(target) return parent;
    }
    return null;
  }

  return loop(treeData);
};

export default treeFindParent;