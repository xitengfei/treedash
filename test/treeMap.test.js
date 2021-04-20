import {treeMap} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeMap Test: ', () => {
  test('general case', () => {
    const iterator = item => ({...item, id: item.code});
    const expected = OldTreeLip.treeMap(areas, iterator);
    expect(treeMap(areas, iterator)).toEqual(expected);
  });
});