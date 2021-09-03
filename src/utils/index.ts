const _toString = Object.prototype.toString;

type VariableType = 'Array'|'Object'|'Function'|'String'|'Null'|'Undefined'|'Boolean'|'Number';

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