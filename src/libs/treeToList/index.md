---
group:
  path: '/libs'
  title: '函数'
  order: 0
title: treeToList
---



## treeToList
将treeData拍平成数组
##### 参数
- dataSource(**Array\<INode\>**): 具有树形关系的源列表数据
- options(**buildTreeOptions**): 配置项(可选)

##### 返回
Tree Data(**Array\<TreeNode\>**)

#### Example
```javascript

// 基本用法
const listData = [
  {"code": "130000","name": "河北省", parentCode: ''},
  {"code": "130100","name": "石家庄市", parentCode: "130000"},
  {"code": "130102","name": "长安区", parentCode: "130100"},
  {"code": "130103","name": "桥东区", parentCode: "130100"},
];
const treeData = treeBuild(listData, {
  idKey: 'code',
  parentIdKey: 'parentCode',
  rootPid: '',
});

/**
 * 结果
 * 
[
    {
        "code":"130000",
        "name":"河北省",
        "parentCode":"",
        "level":0,
        "isLeaf":false,
        "path":"",
        "children":[
            {
                "code":"130100",
                "name":"石家庄市",
                "parentCode":"130000",
                "level":1,
                "isLeaf":false,
                "path":",130000",
                "children":[
                    {
                        "code":"130102",
                        "name":"长安区",
                        "parentCode":"130100",
                        "level":2,
                        "isLeaf":true,
                        "path":",130000,130100"
                    },
                    {
                        "code":"130103",
                        "name":"桥东区",
                        "parentCode":"130100",
                        "level":2,
                        "isLeaf":true,
                        "path":",130000,130100"
                    }
                ]
            }
        ]
    }
] 
*/
```


> buildTreeOptions
```typescript
interface buildTreeOptions {
  /**
   * id列的键, 默认值“id”
   */
  idKey?: string;
  /**
   * pid列的键, 默认值“pid”
   */
  parentIdKey?: string;
  /**
   * 构造的树形数据的children键, 默认值“children”
   */
  childKey?: string;
  /**
   * 指定根节点的pid, 默认值为0
   */
  rootPid?: any;
  /**
   * 用于没有pid关系的情况，自己提供找到子节点的方法
   */
  getChilds?: (pid: number, level: number, path: string) => Array<INode>;
}
```