
/*
货币格式化的方法
vue项目中，全局货币格式化引用：
第一步先在main.js中引入
  import {currency} from "@/util/currency" //过滤器（货币）
  Vue.filter("currency",currency)
第二步 在组建中使用过滤器
  {{totalPrice | currency("$",2)}}  //第一个参数是货币符号，第二个参数是要保留的小数位数  
*/
const digitsRE = /(\d{3})(?=\d)/g

export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

