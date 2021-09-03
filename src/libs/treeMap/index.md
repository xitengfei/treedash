---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeMap
---


## treeMap(treeData, iterator, options)
对treeData进行遍历并返回新的treeData

##### 参数
- treeData(**Array\<TreeNode\>**): 树形数据
- iterator(**Function**) 迭代器函数
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions
```typescript
interface ITreeOptions{
  childKey?: string;
}
```

##### 返回
Tree Data(**Array\<TreeNode\>**)

##### 例子
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

treedash.treeMap(treeData, (node, parent)=>{
  const level = parent ? parent.level + 1 : 1;
  return {...node, level};
});
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

  treedash.treeMap(treeData, (node, parent)=>{
    const level = parent ? parent.level + 1 : 1;
    return {...node, level};
  });
`;

export default () => {
  return (<CodeExcuter initialCode={initCode} />);
}
```