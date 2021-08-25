import {
  Node, 
  IsMatchFn,
  ITreeOptions
} from '../interfaces';

interface IOptions extends ITreeOptions{
  deleteEmptyParent?: boolean; // 是否删除没有子元素的父节点
}

/** 
 * Remove Nodes from Data Tree
 * @param {*} treeData
 * @param {*} matchFn [function]
 */
const treeDelete = function (treeData: Array<Node>, matchFn: IsMatchFn, options: IOptions = {}): Array<Node>{
  if (!treeData || !Array.isArray(treeData)) return treeData;
  if ('function' !== typeof matchFn) return treeData;

  const {
    childKey = 'children',
    deleteEmptyParent = false
  } = options;

  const loop = function(nodes: Array<Node>): Array<Node>{
    return nodes.map((node: Node) => {
      if(matchFn(node)){
        return null;
      }else {
        if (node[childKey] && node[childKey].length) {
          const childs = loop(node[childKey]);
          if (!childs.length && deleteEmptyParent) {
            return null;
          } else {
            return {
              ...node,
              [childKey]: childs,
            };
          }
        }
        return node;
      }
    }).filter(node => null !== node) as Array<Node>;
  }

  return loop(treeData);
};

export default treeDelete;