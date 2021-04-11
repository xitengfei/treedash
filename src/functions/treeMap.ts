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
      if (nextNode[childKey] && nextNode[childKey].length) {
        return {
          ...nextNode,
          [childKey]: loop(nextNode[childKey], node),
        };
      } else {
        return nextNode;
      }
    });
  }

  return loop(treeData);
};

export default treeMap;