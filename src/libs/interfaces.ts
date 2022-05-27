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

export type TreeIterator<T, R = T> = (node: T, parent?: R) => R;
