---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeUpdate
---


## treeUpdate(treeData, matchFn, updateFn, [options])
根据条件找到并替换treeData中的节点

##### 参数
- treeData(**Array\<TreeNode\>**): 树形数据
- matchFn(**Function**) 断言函数, 如果node是要找的节点返回true, 否则返回false
- updateFn(**) 替换函数，用该函数的返回值替换找到的节点
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

treeUpdate(treeData, node => node.name === "石家庄市", node => {
  return {...node, tag: ['河北省会']};
});

/**
 * 结果
 * [
    {
        "code":"130000",
        "name":"河北省",
        "children":[
            {
                "code":"130100",
                "name":"石家庄市",
                "children":[
                    {
                        "code":"130102",
                        "name":"长安区"
                    },
                    {
                        "code":"130103",
                        "name":"桥东区"
                    }
                ],
                "tag":[
                    "河北省会"
                ]
            }
        ]
    },
    {
        "code":"140000",
        "name":"山西省"
    }
  ]
*/
```