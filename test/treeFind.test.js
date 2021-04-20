import {treeFind} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeFind Test: ', () => {
  test('general case', () => {
    const iterator = item => item.name === '顺义区';
    const expected = OldTreeLip.treeFindNode(areas, iterator);
    expect(treeFind(areas, iterator)).toEqual(expected);
  });
});