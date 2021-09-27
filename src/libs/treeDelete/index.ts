import {
  AnyObj, 
  IsMatch,
  BaseOptions
} from '../interfaces';
import {isTypeOf} from '../../utils';

interface IOptions extends BaseOptions{
  deleteEmptyParent?: boolean; // 是否删除没有子元素的父节点
}

/** 
 * Remove Nodes from Data Tree(remove multiple)
 * @param {*} treeData
 * @param {*} isMatch [function]
 * @param {*} options
 */
const treeDelete = function<T extends AnyObj>(treeData: Array<T>, isMatch: IsMatch<T>, options: IOptions = {}): Array<T>{
  // check params
  if (!isTypeOf(treeData, 'array')) return treeData;
  if (!isTypeOf(isMatch, 'function')) return treeData;

  const {
    childKey = 'children',
    deleteEmptyParent = false
  } = options;

  const loop = function(nodes: Array<T>): Array<T>{
    let newNodes: Array<T> = [];

    for(let node of nodes){
      if(isMatch(node)) continue;

      if (node[childKey] && node[childKey].length) {
        const childs = loop(node[childKey]);

        if(!(childs.length === 0 && deleteEmptyParent)){
          newNodes.push({
            ...node,
            [childKey]: childs,
          });
        }
      }else{
        newNodes.push(node);
      }
    }

    return newNodes;
  }

  return loop(treeData);
};

export default treeDelete;