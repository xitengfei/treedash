---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeToList
---

## treeToList(treeData, [options])
将treeData拍平成数组
##### 参数
- treeData(**Array\<TreeNode\>**): 树形数据
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions
```typescript
interface ITreeOptions{
  childKey?: string;
}
```

##### 返回
对象数组(**Array\<Node\>**)

##### 例子
```javascript

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

treeToList(treeData);

/**
 * 结果
 * [
    {
        "code":"130000",
        "name":"河北省"
    },
    {
        "code":"130100",
        "name":"石家庄市"
    },
    {
        "code":"130102",
        "name":"长安区"
    },
    {
        "code":"130103",
        "name":"桥东区"
    },
    {
        "code":"140000",
        "name":"山西省"
    }
  ]
*/
```