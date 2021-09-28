const _toString = Object.prototype.toString;

type VariableType = 'array'|'object'|'function'|'string'|'null'|'undefined'|'boolean'|'number';

const variableTypeMap: any = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
const getType = (item: any): string => {
  return _toString.call(item).slice(8, -1)
}
export const isTypeOf = (item: any, type: VariableType): boolean => {
  return variableTypeMap[type] && variableTypeMap[type] === getType(item)
}