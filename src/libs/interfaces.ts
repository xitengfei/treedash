export interface Node extends Object{
  [key: string]: any;
  children?: Array<Node>;
};

export type TreeIterator = (node: Node, parent?: Node) => Node;

export type IsMatchFn = (node: Node) => boolean;

export interface ITreeOptions{
  childKey?: string;
}

export interface BaseOptions{
  childKey?: string;
}

export interface AnyObj{
  [key: string]: any;
}

export interface IsMatch<T>{
  (node: T): boolean
}
