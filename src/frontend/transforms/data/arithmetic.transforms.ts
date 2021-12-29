export const add = (a:any,b:any) => a + b
export const subtract = (a:any,b:any) => a - b
export const multiply = (a:any,b:any) => a * b
export const divide = (a:any,b:any) => a / b
export const sum = (arr:any[]) => arr.reduce(add)
export const mean = (arr:any[]) => sum(arr) / arr.length

// export const _parseProperFormat = (val) => {
//     if (typeof val === 'boolean') val = val ? 1 : 0;
//     else val = Number.parseFloat(val)
//     return val
// }