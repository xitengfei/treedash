import { treeFinds } from "../src";

const treeData = [
  {
    code: "130000",
    name: "河北省",
    children: [
      {
        code: "130100",
        name: "石家庄",
        children: [
          {
            code: "130102",
            name: "长安区",
          },
          {
            code: "130103",
            name: "桥东区",
          },
          {
            code: "130133",
            name: "赵县",
            level: 2,
            isLeaf: true,
            path: "0,130000,130100",
          },
          {
            code: "130181",
            name: "辛集市",
            level: 2,
            isLeaf: true,
            path: "0,130000,130100",
          },
        ],
      },
      {
        code: "130200",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区",
          },
        ],
      },
    ],
  },
];

describe("treeFinds Test: ", () => {
  test("general case", () => {
    const expected = [
      {
        code: "130200",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区",
          },
        ],
      },
      {
        code: "130181",
        name: "辛集市",
        level: 2,
        isLeaf: true,
        path: "0,130000,130100",
      },
    ];
    expect(
      treeFinds(treeData, (item) => item.name.endsWith("市"), {
        algorithm: "BFS",
      })
    ).toEqual(expected);
  });

  test("DFS algorithm case: ", () => {
    const expected = [
      {
        code: "130181",
        name: "辛集市",
        level: 2,
        isLeaf: true,
        path: "0,130000,130100",
      },
      {
        code: "130200",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区",
          },
        ],
      },
    ];
    expect(
      treeFinds(treeData, (item) => item.name.endsWith("市"), {
        algorithm: "DFS",
      })
    ).toEqual(expected);
  });
});
