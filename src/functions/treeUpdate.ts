import {
  Node, 
  IsMatchFn,
  TreeIterator,
  ITreeOptions
} from '../interfaces';

interface IOptions extends ITreeOptions{
  greedy?: boolean; // 是否贪婪匹配
}


/**
 * Update Tree Nodes
 * @param {*} treeData
 * @param {*} matchFn the funciton to find/filter target node
 * @param {*} updateFn the function to replace target node
 */
const treeUpdate = function (treeData: Array<Node>, matchFn: IsMatchFn, updateFn: TreeIterator, options: IOptions): Array<Node>|null{
  if (!treeData || !Array.isArray(treeData)) return treeData;
  if ('function' !== typeof matchFn || 'function' !== typeof updateFn) return treeData;

  const {
    childKey = 'children',
    greedy = false,
  } = options;

  const loop = function(nodes: Array<Node>): Array<Node>{
    return nodes.map((node: Node) => {
      if(matchFn(node)){
        const newNode = updateFn(node);

        if(node[childKey] && greedy){
          return {...newNode, [childKey]: loop(node[childKey])}
        }
        return newNode;
      }else {
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