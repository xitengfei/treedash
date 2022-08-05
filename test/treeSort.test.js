import { treeSort } from "../src";

var treeData = [
  {
    code: "130000",
    name: "河北省",
    order: 1,
    children: [
      {
        code: "130100",
        name: "石家庄市",
        order: 0,
        children: [
          {
            code: "130102",
            name: "长安区",
          },
          {
            code: "130103",
            name: "桥东区",
            order: 2,
          },
          {
            code: "130104",
            name: "桥西区",
            order: 1,
          },
          {
            code: "130105",
            name: "新华区",
            order: 1,
          },
          {
            code: "130108",
            name: "裕华区",
          },
        ],
      },
    ],
  },
  {
    code: "140000",
    name: "山西省",
    order: 0,
  },
];

describe("treeSearch Test: ", () => {
  test("general case", () => {
    const expected = [
      {
        code: "140000",
        name: "山西省",
        order: 0,
      },
      {
        code: "130000",
        name: "河北省",
        order: 1,
        children: [
          {
            code: "130100",
            name: "石家庄市",
            order: 0,
            children: [
              {
                code: "130104",
                name: "桥西区",
                order: 1,
              },
              {
                code: "130105",
                name: "新华区",
                order: 1,
              },
              {
                code: "130103",
                name: "桥东区",
                order: 2,
              },
              {
                code: "130102",
                name: "长安区",
              },
              {
                code: "130108",
                name: "裕华区",
              },
            ],
          },
        ],
      },
    ];

    expect(treeSort(treeData, "order")).toEqual(expected);
  });
});
