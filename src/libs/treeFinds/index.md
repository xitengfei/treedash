---
group:
  path: "/libs"
  title: "函数"
  order: 0
title: treeFinds
---

#### treeFinds(treeData, matchFn, [options])

在 treeData 中查找所有符合 matchFn 的节点，返回一个数组。

##### 参数

- treeData(**Array\<TreeNode\>**): 树形数据
- matchFn(**(node: Node) => boolean**) 断言函数, 如果 node 是要找的节点返回 true, 否则返回 false
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions

```typescript
interface ITreeOptions {
  algorithm?: "BFS" | "DFS";
}
```

##### 返回

TreeNode

#### 例子

```javascript
const treeData = [
  {
    code: "130000",
    name: "河北省",
    children: [
      {
        code: "130100",
        name: "石家庄市",
        children: [
          {
            code: "130102",
            name: "长安区",
          },
          {
            code: "130103",
            name: "桥东区",
          },
        ],
      },
    ],
  },
];
treedash.treeFinds(treeData, (node) => node.name === "桥东区");
```

##### 试一下

```jsx
import React, { useState } from "react";
import * as treedash from "treedash";
import { CodeExcuter } from "../../components";
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
  treedash.treeFinds(treeData, (node)=>node.name === '桥东区');
`;

export default () => {
  return <CodeExcuter initialCode={initCode} />;
};
```
