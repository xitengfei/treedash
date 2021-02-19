---
title: API Introduction
toc: menu
---

## Api Overview

- treeMap
- treeFind
- treeFindNodeParent
- treeFindAndUpdate
- treeFindAndDelete
- searchInTreeData
- treeCount
- treeToList


tree data example

```javascript
var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

var treeData = [
  {
    key: "1",
    title: "A",
    children: [
      {
        key: "1-1",
        title: "AA",
        children: [
          {
            key: "1-1-1",
            title: "AAAA",
          },
        ],
      },
      {
        key: "1-2",
        title: "AB",
        children: [
          {
            key: "1-2-1",
            title: "ABA",
          },
        ],
      },
    ],
  },
  {
    key: "2",
    title: "B",
    children: [
      {
        key: "2-1",
        title: "BA",
        children: [
          {
            key: "2-1-1",
            title: "BAA",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "C",
    children: [],
  },
];
```


## treeMap
loop in tree data

#### Arguments

#### Returns

#### Example
```javascript
  // adde level to tree data
  treeMap(treeData, (node, parent) => {
    const level = parent ? parent.level + 1 : 0;
    return {...node,  level};
  })
```

## treeFind

## treeFindNodeParent

## treeFindAndUpdate

## treeFindAndDelete

## searchInTreeData
