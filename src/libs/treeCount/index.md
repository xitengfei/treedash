---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeCount
---


## treeCount
对treeData节点进行统计

##### 参数
- treeData(**Array\<INode\>**): 树形数据
- options(**ITreeOptions**): 配置项(可选)

##### 返回
number

#### 例子
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
treeCount(treeData);
// => 4
```