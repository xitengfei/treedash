import {
  IsMatch,
  BaseOptions,
  AnyObj
} from '../interfaces';
import {isTypeOf} from '../../utils';

interface IOptions extends BaseOptions{
}

/**
 * Tree Find
 * 使用广度优先算法, 只返回一个目标节点
 * @param treeData 
 * @param isMatch 
 * @param options 
 * @returns 
 */
const treeFindBFS = function <T extends AnyObj>(treeData: Array<T>, isMatch: IsMatch<T>, options: IOptions = {}): T | null {
  // check params
  if (!isTypeOf(treeData, 'array')) return null;
  if (!isTypeOf(isMatch, 'function')) return null;

  const {
    childKey = 'children'
  } = options;

  let target: T | null = null;
  let queue = [...treeData];
  let visited: Array<any> = []; // 用于处理环状数据

  while (queue.length) {
    let current = queue.shift()!;
    visited.push(current); // 访问后进行记录

    if (isMatch(current)) {
      target = current;
      break;
    }else if (current[childKey]) {
      for (let child of current[childKey]) {
        const index = visited.indexOf(child);
        if(!~index) queue.push(child);
      }
    }
  }

  return target;
}

export default treeFindBFS;