import {
  Node,
  ITreeOptions
} from '../interfaces';
import treeMap from './treeMap';

/**
 * 树形转换为数组
 * @param {*} node
 */
 export const treeToList = function (treeData: Array<Node>, options: ITreeOptions) : Array<Node>{
  if (!treeData || !Array.isArray(treeData)) return [];

  const {
    childKey = 'children'
  } = options;

  let list: Array<Node> = [];
  treeMap(
    treeData,
    node => {
      let item = { ...node };
      delete item[childKey]; // remove childs
      list.push(item);
      return node;
    },
    options
  );
  return list;
};

export default treeToList;