import {treeFindParent} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeFindParent Test: ', () => {
  test('general case', () => {
    const iterator = item => item.name === '路南区';
    const expected = OldTreeLip.treeFindNodeParent(areas, iterator);
    expect(treeFindParent(areas, iterator)).toEqual(expected);
  });
});