import {treeUpdate} from '../src';
import OldTreeLip from './old/Tree';
import areas from './json/testCase.json';

describe('treeUpdate Test: ', () => {
  test('general case', () => {
    const iterator = item => item.name === '丰台区';
    const update = item => ({...item, star: true});

    const expected = OldTreeLip.treeFindAndUpdate(areas, iterator, update);
    expect(treeUpdate(areas, iterator, update)).toEqual(expected);
  });
});