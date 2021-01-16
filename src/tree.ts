import {
  Node, 
  TreeIterator,
  IsMatchFn
} from './interfaces';

/**
 * 遍历树
 */
export const treeMap = function (nodes: Array<Node>, iterator: TreeIterator, childKey: string = 'children', parent?: Node): Array<Node>|null{
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


/**
 * Find Tree Node
 * @param {*} nodes
 * @param {*} matchFn the funciton to find target node
 */
export const treeFind = function (nodes: Array<Node>, matchFn: IsMatchFn, childKey: string = 'children'): Node|null{
  if (!nodes || !Array.isArray(nodes)) return null;
  if ('function' !== typeof matchFn) return nodes;

  for (let node of nodes) {
    let target = null;
    if (matchFn(node)) {
      target = node;
    } else if (node[childKey]) {
      target = treeFind(node[childKey], matchFn);
    }
    if (target) return target;
  }

  return null;
};


/**
 * Find Parent of Current Node
 * @param {*} nodes
 * @param {*} matchFn
 */
export const treeFindNodeParent = function (tree: Node, matchFn: IsMatchFn): Node|null{
  if (!tree || !tree.children || !Array.isArray(tree.children)) return null;
  if ('function' !== typeof matchFn) return null;

  for (let node of tree.children) {
    let target = null;
    if (matchFn(node)) {
      target = tree;
    } else {
      target = treeFindNodeParent(node, matchFn);
    }
    if (target) return target;
  }

  return null;
};


declare type UpdateFn = (node: Node) => Node;

/**
 * Find Tree Node Then Update
 * @param {*} nodes
 * @param {*} matchFn the funciton to find target node
 * @param {*} updateFn the function to update target node
 */
export const treeFindAndUpdate = function (nodes: Array<Node>, matchFn: IsMatchFn, updateFn: UpdateFn): Array<Node>|null{
  if (!nodes || !Array.isArray(nodes)) return null;
  if ('function' !== typeof matchFn || 'function' !== typeof updateFn) return nodes;

  return nodes.map(node => {
    if (matchFn(node)) {
      return updateFn(node);
    } else if (node.children) {
      const children = treeFindAndUpdate(node.children, matchFn, updateFn) as Array<Node>;
      return { ...node, children };
    } else {
      return node;
    }
  });
};

/**
 * Remove Node from Tree
 * @param {*} nodes [array]
 * @param {*} matchFn [function]
 * @param {*} deleteEmptyParent [boolean]
 * @param {*} childNodeKey [string] : 遍历子节点name， 默认children
 */
export const treeFindAndDelete = function (nodes: Array<Node>, matchFn: IsMatchFn, deleteEmptyParent: boolean = true, childNodeKey: string = 'children'): Array<Node>{
  if (!nodes || !Array.isArray(nodes)) return [];
  if ('function' !== typeof matchFn) return nodes;

  return nodes.map(node => {
    if (matchFn(node)) {
      return null;
    } else if (node[childNodeKey] && node[childNodeKey].length) {
      const children = treeFindAndDelete(node[childNodeKey], matchFn, deleteEmptyParent, childNodeKey);
      if (!children.length && deleteEmptyParent) {
        return null;
      } else {
        return {
          ...node,
          [childNodeKey]: children,
        };
      }
    } else {
      return node;
    }
  }).filter(node => null !== node) as Array<Node>;
};


/**
 * 从TreeData中搜索
 * @param {*} TreeData
 * @param {*} func 用于匹配的回调函数
 * @return Array TreeData （返回完整树结构）
 */
export const searchInTreeData = function (TreeData: Array<Node>, matchFn: IsMatchFn, childKey: string = 'children') {
  if (!matchFn) return [];
  const loopNodes = function (nodes: Array<Node>) {
    if (!nodes || !Array.isArray(nodes)) return [];
    let matchNodes: Array<Node> = [];

    nodes.forEach(node => {
      let isMatch = matchFn(node);
      if (isMatch) {
        matchNodes.push(node);
      } else if (node[childKey]) {
        let newNode = { ...node };
        newNode[childKey] = loopNodes(node[childKey]);
        if (newNode[childKey].length) {
          matchNodes.push(newNode);
        }
      }
    });

    return matchNodes;
  };

  return loopNodes(TreeData);
};

/**
 * treeData计算总节点个数，包括父节点
 * @param {*} nodes
 */
export const treeCount = function (nodes: Array<Node>): number {
  if (!nodes || !Array.isArray(nodes)) return 0;
  return nodes.reduce((total, current) => {
    if (current.children && current.children.length) {
      return total + 1 + treeCount(current.children);
    } else {
      return total + 1;
    }
  }, 0);
};

/**
 * 树形转换为数组
 * @param {*} node
 */
export const treeToList = function (nodes: Array<Node>, childKey = 'children') : Array<Node>{
  let list: Array<Node> = [];
  treeMap(
    nodes,
    node => {
      let item = { ...node };
      delete item[childKey]; //去掉children
      list.push(item);
      return node;
    },
    childKey
  );
  return list;
};

export default {
  treeMap,
  treeFindNode,
  treeFindNodeParent,
  treeFindAndUpdate,
  treeFindAndDelete,
  searchInTreeData,
  treeCount,
  treeToList
}