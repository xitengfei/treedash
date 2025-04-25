export interface AnyObj {
  [key: string]: any;
}

export interface BaseOptions {
  /**
   * 构造的树形数据的children键, 默认值“children”
   */
  childKey?: string;
}
export interface IsMatch<T> {
  (node: T): boolean;
}

export type TreeMapIterator<T, R = T> = (node: T, parent: R|undefined, index:number) => R;
export type TreeFindIterator<T, R = T> = (node: T, parent?: T) => R;
