/**
 * Build Tree Data from an Array
 */

 interface INode{
  [key: string]: any;
  level?: number;
  isLeaf?: boolean;
  path?: string;
}
export interface buildTreeOptions {
  /**
   * id列的键, 默认值“id”
   */
  idKey?: string;
  /**
   * pid列的键, 默认值“pid”
   */
  parentIdKey?: string;
  /**
   * 构造的树形数据的children键, 默认值“children”
   */
  childKey?: string;
  /**
   * 指定根节点的pid, 默认值为0
   */
  rootPid?: any;
  /**
   * 用于没有pid关系的情况，自己提供找到子节点的方法
   */
  getChilds?: (pid: number, level: number, path: string) => Array<INode>;
}

export const treeBuild = function(dataSource: Array<INode>, options: buildTreeOptions = {}) {
  if (!dataSource || !dataSource.length) return [];

  const { 
    idKey = 'id', 
    parentIdKey = 'pid', 
    childKey = 'children', 
    rootPid = 0,
    getChilds
  } = options;

  // let counter = 0;

  const loop = function (pid: any, level: number, path: string) : Array<INode>{
    // counter++;
    let nodes = 'function' === typeof getChilds ? 
      getChilds(pid, level, path) : 
      dataSource.filter(item => item[parentIdKey] === pid);

    return nodes.map(node => {
      const children = loop(node[idKey], level + 1, path + ',' + node[idKey]);
      let newItem: INode = {
        ...node,
        level,
        isLeaf: !children.length,
        path
      };
      if (children.length) newItem[childKey] = children;
      return newItem;
    });
  };

  // console.log('loop count:', counter, dataSource.length);
  return loop(rootPid, 0, rootPid);
};

export default treeBuild;