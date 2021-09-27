import {
  AnyObj, 
  IsMatch,
  BaseOptions
} from '../interfaces';
import {isTypeOf} from '../../utils';

/**
 * Find Parent of A Node
 * find类方法的目标是 找到一个目标即返回
 * @param treeData 
 * @param isMatch 
 * @param options 
 * @returns 
 */
const treeFindParent = function<T extends AnyObj>(treeData: Array<T>, isMatch: IsMatch<T>, options: BaseOptions = {}): T|null{
  // check params
  if (!isTypeOf(treeData, 'array')) return null;
  if (!isTypeOf(isMatch, 'function')) return null;

  const {
    childKey = 'children'
  } = options;

  const loop = function(nodes: Array<T>, parent: T|null = null): T|null{
    for(let node of nodes){
      let target = null;

      if(isMatch(node)){
        target = parent;
      } else if(node[childKey]){
        target = loop(node[childKey], node);
      }

      if(target) return target;
    }
    return null;
  }

  return loop(treeData);
};

export default treeFindParent;