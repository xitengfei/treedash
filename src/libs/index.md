---
title: API介绍
---

## Api概览

- treeBuild 构建树
- treeCount 统计树节点数量
- treeDelete 从树上删除节点
- treeFind 查找节点
- treeFindParent 查找父节点
- treeMap 遍历树
- treeSearch 树搜索(返回完整的树)
- treeToList 将树拍平成为数组
- treeUpdate 更新树上某个节点

## 使用说明

#### treeData数据结构样例
```javascript
[
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
```