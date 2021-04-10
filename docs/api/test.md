---
title: API Test
---

#### 基本用法
```jsx
import React from 'react';
import {buildTree} from '@xitengfei/tree-utils';
import city from '../json/city.json';

export default () => {
  const formatCity = function(){
    const list = Object.keys(city).map(code => ({code, childs: city[code]}));
    const tree = buildTree(list, {
      idKey: 'code',
      rootPid: '0',
      getChilds: (pid, level, path) => {
        const childs = city[path];
        if(childs) return Object.keys(childs).map(code => ({ code, name: childs[code]}));
        return [];
      }
    });
    alert(JSON.stringify(tree));
    console.log(tree);
  }

  return (
    <div>
      <button onClick={()=>formatCity()}>执行</button>
      <pre></pre>
    </div>
  )
}
```