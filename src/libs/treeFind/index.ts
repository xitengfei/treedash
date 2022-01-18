import {
  IsMatch,
  BaseOptions,
  AnyObj
} from '../interfaces';
import { isTypeOf } from '../../utils';

interface IOptions extends BaseOptions {
  algorithm?: 'BFS' | 'DFS';
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
    childKey = 'children',
    algorithm = 'BFS'
  } = options;

  let target: T | null = null;
  let queue = [...treeData];
  let visited: Array<any> = []; // 用于处理环状数据

  if('BFS' === algorithm){
    while (queue.length) {
      let current = queue.shift()!; // 从头取出一个
      visited.push(current); // 访问后进行记录
  
      if (isMatch(current)) {
        target = current;
        break;
      } else if (current[childKey]) {
        for (let child of current[childKey]) {
          const index = visited.indexOf(child);
          if (!~index) queue.push(child);
        }
      }
    }
  }else{
    // DFS 深度优先
    while (queue.length) {
      let current = queue.pop()!; // 从末尾取一个
      visited.push(current);

      if(isMatch(current)){
        target = current;
        break;
      } else if(current[childKey]){
        // 倒序放入栈中，以便下次循环按顺序取
        for (let i = current[childKey].length - 1; i >= 0; i--) {
          queue.push(current[childKey][i])
        }
      }
    }
  }

  return target;
}

export default treeFindBFS;