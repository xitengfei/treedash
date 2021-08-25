import {
  AnyObj, 
  ITreeOptions
} from '../interfaces';
import {isTypeOf} from '../../utils';


interface IsTargetParent{
  <T>(node: T): boolean
}

/**
 * treePush
 * 设计思路：找到一个目标节点(push节点的父层)即可完成操作，不再向下或向后遍历，即严格的最多执行一次操作，遵循非贪婪原则
 * 按照以上要求，本函数应当使用广度优先遍历比较合适，暂存，后续再修改
 * @param treeData 
 * @param newNodes 
 * @param isTargetParent 
 * @param options 
 * @returns 
 */
const treePush = function<T extends AnyObj>(treeData: Array<T>, newNodes: Array<T>, isTargetParent?: IsTargetParent, options: ITreeOptions = {}): Array<T>|null{
  if (!isTypeOf(treeData, 'array') || !newNodes) return treeData;

  const {
    childKey = 'children',
  } = options;

  const loop = function(nodes: Array<T>): Array<T>{
    return nodes.map((node) => {
      if(isTargetParent(node)){
        let childs = node[childKey] ? node[childKey].concat(newNodes) : newNodes;
        return ({...node, [childKey]: childs});
      }

      if (node[childKey]) {
        return { ...node, [childKey]: loop(node[childKey]) };
      }
      return node;
    });
  }

  return loop(treeData);
};

export default treePush;