import {
  Node, 
  IsMatchFn,
  ITreeOptions
} from '../interfaces';

/**
 * Search In Data Tree
 * @param {*} TreeData
 * @param {*} matchFn
 * @return Array TreeData （返回完整树结构）
 */
 const treeSearch = function (treeData: Array<Node>, matchFn: IsMatchFn, options: ITreeOptions = {}): Array<Node> {
  if (!treeData || !Array.isArray(treeData)) return [];
  if ('function' !== typeof matchFn) return [];

  const {
    childKey = 'children'
  } = options;

  const loop = function (nodes: Array<Node>) {
    let matchNodes: Array<Node> = [];

    nodes.forEach(node => {
      if (matchFn(node)) {
        matchNodes.push(node);
      } else {
        if (node[childKey] && node[childKey].length){
          const childs = loop(node[childKey]);
          if (childs.length) {
            // add matched childs only
            const newNode = {...node, [childKey]: childs };
            matchNodes.push(newNode);
          }
        }
      }
    });

    return matchNodes;
  };

  return loop(treeData);
};

export default treeSearch;