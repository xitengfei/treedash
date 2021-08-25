const _toString = Object.prototype.toString;
const variableTypeMap = {
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
export const isTypeOf = (item: any, type: string): boolean => {
  return variableTypeMap[type] && variableTypeMap[type] === getType(item)
}