
/**
 * 从list构建树结构
 */
 export interface buildTreeOptions {
  idKey?: string;
  parentIdKey?: string;
  childKey?: string;
  rootPid?: any;
  getChilds?: (pid: number, level: number, path: string) => Array<INode>;
}

interface INode{
  [key: string]: any;
  level?: number;
  isLeaf?: boolean;
  path?: string;
}

export const buildTree = function(dataSource: Array<INode>, options: buildTreeOptions) {
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

  const ret = loop(rootPid, 0, rootPid);
  // console.log('loop count:', counter, dataSource.length);
  return ret;
};

export default buildTree;