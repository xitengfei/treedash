import * as treedash from '../src';

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

const expectedResult = {
  "code": "130100",
  "name": "石家庄市",
  "children": [
    {
      "code": "130102",
      "name": "长安区"
    },
    {
      "code": "130103",
      "name": "桥东区"
    }
  ]
};


describe('treeFindParent Test: ', () => {
  test('general case', () => {
    const testResult = treedash.treeFindParent(treeData, (node)=>node.name === '桥东区');
    expect(testResult).toEqual(expectedResult);
  });
});