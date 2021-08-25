import {treeMap} from '../src';

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

const expected = [
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
            "level": 3
          },
          {
            "code": "130103",
            "name": "桥东区",
            "level": 3
          }
        ],
        "level": 2
      }
    ],
    "level": 1
  }
];

describe('treeMap Test: ', () => {
  test('general case', () => {
    const result = treeMap(treeData, (node, parent)=>{
      const level = parent ? parent.level + 1 : 1;
      return {...node, level};
    });
    expect(result).toEqual(expected);
  });

  test('corner case 1', () => {
    expect(treeMap([])).toEqual([]);
  });

  test('corner case 2', () => {
    expect(treeMap(null)).toEqual(null);
  });
});