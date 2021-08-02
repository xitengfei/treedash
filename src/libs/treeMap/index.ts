import {
  Node, 
  TreeIterator,
  ITreeOptions
} from '../interfaces';

/**
 * loop through data trees
 */
const treeMap = function(treeData: Array<Node>, iterator: TreeIterator, options: ITreeOptions = {}): Array<Node>|null{
  if (!treeData || !Array.isArray(treeData)) return treeData;
  if ('function' !== typeof iterator) return treeData;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<Node>, parent?: Node): Array<Node>{
    return nodes.map((node: Node) => {
      let nextNode = iterator(node, parent);

      // 这里默认使用 iterator返回的新node而不是原Node去判断进入下层递归
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