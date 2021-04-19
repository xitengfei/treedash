import {treeToList} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeToList Test: ', () => {
  test('general case', () => {
    const expected = OldTreeLip.treeToList(areas);
    expect(treeToList(areas)).toEqual(expected);
  });
});