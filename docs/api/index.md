---
title: API介绍
toc: menu
---

## Api概览

- treeBuild 建树
- treeCount 统计
- treeDelete 删节点
- treeFind 查找节点
- treeFindParent 查找父节点
- treeMap 遍历
- treeSearch 搜索
- treeToList 拍平
- treeUpdate 更新节点

## treeBuild
从一个具有树形关系的列表数据构建出树形结构的数据。<br />
列表源数据中，<b>树形关系</b>需要用类似id，pid的形式给出或通过getChilds方法给出指定节点的子节点

##### 参数
- dataSource(**Array\<INode\>**): 具有树形关系的源列表数据
- options(**buildTreeOptions**): 配置项(可选)

##### 返回
Tree Data(**Array\<TreeNode\>**)

##### buildTreeOptions
```typescript
interface buildTreeOptions {
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
```

#### Example
```javascript

// 基本用法
const listData = [
  {},
];
const treeData = treeBuild(list);
```

## treeCount
对treeData节点进行统计



## treeDelete
从treeData上删除节点

## treeFind
在treeData中查找指定节点

## treeFindParent
在treeData中查找指定节点的父节点

## treeMap
对treeData进行遍历并返回新的treeData

## treeSearch
在treeData中搜索, 返回完整的treeData结构

## treeToList
将treeData拍平成数组

## treeUpdate
根据条件找到并替换treeData中的节点