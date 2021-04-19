import {treeSearch} from '../src';
import OldTreeLip from './old/Tree';
import cityTreeData from './json/cityTreeData.json';

describe('treeSearch Test: ', () => {
  test('general case', () => {
    const iterator = item => item.name === '台湾省';
    const expected = OldTreeLip.searchInTreeData(cityTreeData, iterator);
    expect(treeSearch(cityTreeData, iterator)).toEqual(expected);
  });
});