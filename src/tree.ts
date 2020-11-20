import {Node, TreeIterator} from './interfaces';

export const treeMap = function (nodes: Array<Node>, iterator: TreeIterator, childKey: string = 'children', parent: Node): Array<Node>|null{
  if (!nodes || !Array.isArray(nodes)) return null;
  if ('function' !== typeof iterator) return nodes;

  return nodes.map((node: Node) => {
    let nextNode = iterator(node, parent);
    if (nextNode[childKey] && nextNode[childKey].length) {
      return {
        ...nextNode,
        [childKey]: treeMap(nextNode[childKey], iterator, childKey, node),
      };
    } else {
      return nextNode;
    }
  });
};