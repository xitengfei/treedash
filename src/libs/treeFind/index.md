---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeFind
---



#### treeFind(treeData, matchFn, [options])
在treeData中查找指定节点
##### 参数
- treeData(**Array\<TreeNode\>**): 树形数据
- matchFn(**(node: Node) => boolean**) 断言函数, 如果node是要找的节点返回true, 否则返回false
- options(**ITreeOptions**): 配置项(可选)

> ITreeOptions
```typescript
interface ITreeOptions{
  childKey?: string;
}
```

##### 返回
TreeNode

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
treeFind(treeData, (node)=>node.name === '桥东区');

/**
 * 结果 
 * {code: "130103", name: "桥东区"}
 */
```