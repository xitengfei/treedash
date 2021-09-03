---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeDelete
---

## **treeDelete(treeData, matchFn, [options])**
从treeData上删除节点

##### **参数***
- treeData(**Array\<TreeNode\>**): 树形数据
- matchFn(**(node: Node) => boolean**) 断言函数, 如果node是需要删除的节点返回true, 否则返回false
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions
```typescript
interface ITreeOptions{
  childKey?: string;
  deleteEmptyParent?: boolean; // 默认值true
}
```

##### **返回**
Tree Data(**Array\<TreeNode\>**)

##### **例子**
```javascript
const treeData = [
  {
    "code": "130000",
    "name": "河北省",
    "children": [
      {
        "code": "130100",
        "name": "石家庄市",
        "children": [
          {
            "code": "130102",
            "name": "长安区",
          },
          {
            "code": "130103",
            "name": "桥东区",
          },
        ]
      }
    ]
  }
];

treedash.treeDelete(treeData, node => node.name === '长安区');
```

##### 试一下
```jsx
import React, {useState} from 'react';
import * as treedash from 'treedash';
import {CodeExcuter} from '../../components';
window.treedash = treedash;

const initCode = `
  const treeData = [
    {
      "code": "130000",
      "name": "河北省",
      "children": [
        {
          "code": "130100",
          "name": "石家庄市",
          "children": [
            {
              "code": "130102",
              "name": "长安区",
            },
            {
              "code": "130103",
              "name": "桥东区",
            },
          ]
        }
      ]
    }
  ];

  treedash.treeDelete(treeData, node => node.name === '长安区');
`;

export default () => {
  return (<CodeExcuter initialCode={initCode} />);
}
```