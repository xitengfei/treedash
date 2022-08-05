---
group:
  path: "/libs"
  title: "函数"
  order: 0
title: treeSort
---

## treeSort(treeData, iteratee, options)

对 treeData 进行排序，返回排序后的新 tree

##### 参数

- treeData(**Array\<TreeNode\>**): 树形数据
- iteratee(**string | ((value: T, index: number) => any)**) 排序字段名或 iteratee 函数返回节点的排序值
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions

```typescript
interface ITreeOptions {
  childKey?: string;
}
```

##### 返回

Tree Data(**Array\<TreeNode\>**)

##### 例子

```javascript
var treeData = [
  {
    code: "130000",
    name: "河北省",
    order: 1,
    children: [
      {
        code: "130100",
        name: "石家庄市",
        order: 0,
        children: [
          {
            code: "130102",
            name: "长安区",
          },
          {
            code: "130103",
            name: "桥东区",
            order: 2,
          },
          {
            code: "130104",
            name: "桥西区",
            order: 1,
          },
          {
            code: "130105",
            name: "新华区",
            order: 1,
          },
          {
            code: "130108",
            name: "裕华区",
          },
        ],
      },
    ],
  },
  {
    code: "140000",
    name: "山西省",
    order: 0,
  },
];

treedash.treeSort(treeData, "order");
```

##### 试一下

```jsx
import React, { useState } from "react";
import * as treedash from "treedash";
import { CodeExcuter } from "../../components";
window.treedash = treedash;

const initCode = `
  var treeData = [
    {
      code: "130000",
      name: "河北省",
      order: 1,
      children: [
        {
          code: "130100",
          name: "石家庄市",
          order: 0,
          children: [
            {
              code: "130102",
              name: "长安区",
            },
            {
              code: "130103",
              name: "桥东区",
              order: 2,
            },
            {
              code: "130104",
              name: "桥西区",
              order: 1,
            },
            {
              code: "130105",
              name: "新华区",
              order: 1,
            },
            {
              code: "130108",
              name: "裕华区",
            },
          ],
        },
      ],
    },
    {
      code: "140000",
      name: "山西省",
      order: 0,
    },
  ];

  treedash.treeSort(treeData, "order");
`;

export default () => {
  return <CodeExcuter initialCode={initCode} />;
};
```
