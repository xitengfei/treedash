import { treeBuild } from "../src";

const expected = [
  {
    code: "130000",
    name: "河北省",
    parentCode: "",
    level: 0,
    isLeaf: false,
    path: "",
    children: [
      {
        code: "130100",
        name: "石家庄市",
        parentCode: "130000",
        level: 1,
        isLeaf: false,
        path: ",130000",
        children: [
          {
            code: "130102",
            name: "长安区",
            parentCode: "130100",
            level: 2,
            isLeaf: true,
            path: ",130000,130100",
          },
          {
            code: "130103",
            name: "桥东区",
            parentCode: "130100",
            level: 2,
            isLeaf: true,
            path: ",130000,130100",
          },
        ],
      },
    ],
  },
];

const listData = [
  { code: "130000", name: "河北省", parentCode: "" },
  { code: "130100", name: "石家庄市", parentCode: "130000" },
  { code: "130102", name: "长安区", parentCode: "130100" },
  { code: "130103", name: "桥东区", parentCode: "130100" },
];


describe("treeBuild Test: ", () => {
  test("general case", () => {
    const treeData = treeBuild(listData, {
      idKey: "code",
      parentIdKey: "parentCode",
      rootPid: "",
    });
    expect(treeData).toEqual(expected);
  });
});
