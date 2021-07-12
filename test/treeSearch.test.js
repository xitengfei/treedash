import {treeSearch} from '../src';
import OldTreeLip from './old/Tree';
import cityTreeData from './json/cityTreeData.json';


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



describe('treeSearch Test: ', () => {
  test('general case', () => {
    const expected = [
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
              }
            ]
          }
        ]
      }
    ];

    expect(treeSearch(treeData, (node) => {
      return node.name.includes('长安');
    })).toEqual(expected);
  });
});