import {treeCount} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeMap Test: ', () => {
  test('add new property to every node of a tree', () => {
    const expected = OldTreeLip.treeCount(areas);
    expect(treeCount(areas)).toEqual(expected);
  });
});