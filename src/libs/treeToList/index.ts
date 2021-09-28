import {
  AnyObj,
  BaseOptions
} from '../interfaces';
import treeMap from '../treeMap';
import {isTypeOf} from '../../utils';

/**
 * 树形转换为数组
 * @param {*} node
 */
 export const treeToList = function<T extends AnyObj>(treeData: Array<T>, options: BaseOptions={}) : Array<Partial<T>>{
  // check params
  if (!isTypeOf(treeData, 'array')) return [];

  const {
    childKey = 'children'
  } = options;

  let list: Array<T> = [];
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