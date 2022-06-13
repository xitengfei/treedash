/**
 * Build Tree Data from an Array
 */
import { BaseOptions, AnyObj } from "../interfaces";
import { isTypeOf } from "../../utils";

interface buildTreeOptions<T> extends BaseOptions {
  /**
   * id列的键, 默认值“id”
   */
  idKey?: string;
  /**
   * pid列的键, 默认值“pid”
   */
  parentIdKey?: string;

  /**
   * 指定根节点的pid, 默认值为0
   */
  rootPid?: any;
  /**
   * 用于没有pid关系的情况，自己提供找到子节点的方法
   */
  getChilds?: (pid: any, level: number, path: string) => Array<T>;
}

export type TreeNode<T = unknown> = T & {
  level: number;
  isLeaf: boolean;
  path: string;
};

export default function treeBuild<T extends AnyObj, R = T>(
  dataSource: T[],
  iterator?: (node: T, parent?: T) => R | false
): TreeNode<R>[];
export default function treeBuild<T extends AnyObj, R = T>(
  dataSource: T[],
  options?: buildTreeOptions<T>
): TreeNode<R>[];
export default function treeBuild<T extends AnyObj, R = T>(
  dataSource: T[],
  iterator?: (node: T, parent?: T) => R | false,
  options?: buildTreeOptions<T>
): TreeNode<R>[];
export default function treeBuild<T extends AnyObj, R = T>(
  dataSource: T[],
  iterator?: ((node: T, parent?: T) => R | false) | buildTreeOptions<T>,
  options?: buildTreeOptions<T>
): TreeNode<R>[] {
  if (!dataSource || !dataSource.length) return [];
  if (typeof iterator !== "function" && options === undefined) {
    options = iterator as any;
    iterator = undefined;
  }

  const {
    idKey = "id",
    parentIdKey = "pid",
    childKey = "children",
    rootPid = 0,
    getChilds,
  } = options || {};

  // let counter = 0;

  const loop = function (pid: any, level: number, path: string): TreeNode<R>[] {
    // counter++;

    // get childs
    let nodes: T[];
    if (getChilds && isTypeOf(getChilds, "function")) {
      nodes = getChilds(pid, level, path);
    } else {
      nodes = dataSource.filter((item) => item[parentIdKey] === pid);
    }

    return nodes
      .map((node) => {
        const children = loop(node[idKey], level + 1, path + "," + node[idKey]);
        if (iterator) {
          const result = (iterator as iterator<T, R>)(
            node,
            dataSource.filter((item) => item[idKey] === pid)[0]
          );
          if (result === false) {
            return undefined!;
          } else {
            return {
              level,
              isLeaf: !children.length,
              path,
              ...result,
              [childKey]: children || [],
            } as TreeNode<R>;
          }
        } else {
          return ({
            ...node,
            level,
            isLeaf: !children.length,
            path,
            [childKey]: children || [],
          } as unknown) as TreeNode<R>;
        }
      })
      .filter(Boolean);
  };

  // console.log('loop count:', counter, dataSource.length);
  return loop(rootPid, 0, rootPid);
}

export type iterator<T, R = T> = (node: T, parent?: T) => R | false;
