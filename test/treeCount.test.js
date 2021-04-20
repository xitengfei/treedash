import {treeCount} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeCount Test: ', () => {
  test('general case', () => {
    const expected = OldTreeLip.treeCount(areas);
    expect(treeCount(areas)).toEqual(expected);
  });
});