---
title: API Test
---

#### 基本用法
```jsx
import React, {useState} from 'react';
import * as treedash from 'treedash';
import {CodeExcuter} from '../components';

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
  treedash.treeCount(treeData);
`;

export default () => {
  return (
    <div>
      <CodeExcuter initialCode={initCode} />
    </div>
  )
}
```