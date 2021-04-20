import {treeDelete} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeDelete Test: ', () => {
  test('general case', () => {
    const iterator = item => item.name === '路南区';
    const expected = OldTreeLip.treeFindAndDelete(areas, iterator, true);
    expect(treeDelete(areas, iterator, {deleteEmptyParent: true})).toEqual(expected);
  });
});