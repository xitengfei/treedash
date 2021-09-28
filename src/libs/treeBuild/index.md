---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeBuild
---



## **treeBuild(dataSource, [buildTreeOptions])**

从一个具有树形关系的列表数据构建出树形结构的数据。<br />

<Alert type="info">
  列表源数据(dataSource)中，<b>树形关系</b>需要用类似id，pid的形式给出或通过getChilds方法给出指定节点的子节点 
</Alert>

##### **参数**
- dataSource(**Array\<INode\>**): 具有树形关系的源列表数据
- options(**buildTreeOptions**): 配置项(可选)

> buildTreeOptions
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

##### **返回**
Tree Data(**Array\<TreeNode\>**)

##### **例子**
```javascript

const listData = [
  {"code": "130000","name": "河北省", parentCode: ''},
  {"code": "130100","name": "石家庄市", parentCode: "130000"},
  {"code": "130102","name": "长安区", parentCode: "130100"},
  {"code": "130103","name": "桥东区", parentCode: "130100"},
];
treedash.treeBuild(listData, {
  idKey: 'code',
  parentIdKey: 'parentCode',
  rootPid: '',
});
```


##### 试一下
```jsx
import React, {useState} from 'react';
import * as treedash from 'treedash';
import {CodeExcuter} from '../../components';
window.treedash = treedash;

const initCode = `
  const listData = [
    {"code": "130000","name": "河北省", parentCode: ''},
    {"code": "130100","name": "石家庄市", parentCode: "130000"},
    {"code": "130102","name": "长安区", parentCode: "130100"},
    {"code": "130103","name": "桥东区", parentCode: "130100"},
  ];
  treedash.treeBuild(listData, {
    idKey: 'code',
    parentIdKey: 'parentCode',
    rootPid: '',
  });
`;

export default () => {
  return (<CodeExcuter initialCode={initCode} />);
}
```