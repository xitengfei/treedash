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

const treeBuild = function <T extends AnyObj>(
  dataSource: T[],
  options: buildTreeOptions<T> = {}
): TreeNode<T>[] {
  if (!dataSource || !dataSource.length) return [];

  const {
    idKey = "id",
    parentIdKey = "pid",
    childKey = "children",
    rootPid = 0,
    getChilds,
  } = options;

  // let counter = 0;

  const loop = function (pid: any, level: number, path: string): TreeNode<T>[] {
    // counter++;

    // get childs
    let nodes: T[];
    if (getChilds && isTypeOf(getChilds, "function")) {
      nodes = getChilds(pid, level, path);
    } else {
      nodes = dataSource.filter((item) => item[parentIdKey] === pid);
    }

    return nodes.map((node) => {
      const children = loop(node[idKey], level + 1, path + "," + node[idKey]);
      return {
        ...node,
        level,
        isLeaf: !children.length,
        path,
        [childKey]: children || [],
      };
    });
  };

  // console.log('loop count:', counter, dataSource.length);
  return loop(rootPid, 0, rootPid);
};

export default treeBuild;
