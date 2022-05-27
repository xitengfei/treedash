---
group:
  path: "/libs"
  title: "函数"
  order: 0
title: treeToList
---

## treeToList(treeData, [options])

将 treeData 拍平成数组

##### 参数

- treeData(**Array\<TreeNode\>**): 树形数据
- iterator(**[Function]**) (可选),迭代器函数，可以返回新的数据结构，得到一个不同类型的数组
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions

```typescript
interface ITreeOptions {
  childKey?: string;
}
```

##### 返回

对象数组(**Array\<Node\>**)

##### 例子

```javascript
var treeData = [
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
  {
    code: "140000",
    name: "山西省",
  },
];

treedash.treeToList(treeData);
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
    },
    {
      "code": "140000",
      "name": "山西省"
    }
  ];
  treedash.treeToList(treeData);
`;

export default () => {
  return <CodeExcuter initialCode={initCode} />;
};
```
