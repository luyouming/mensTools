/**
 * add by Famous Lu on 2020年3月20日
 * @returns {string}
 */
function numberFormat (number, decimals, decPoint, thousandsSep) {
  /**
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
function numFixed(val) {
  if (!val) {
    return
  }
  if (val.indexOf('%') > -1) {
    // 处理过的同比数据不用做事
    //   console.log(val)
    val = val === '.00%' ? '0.00%' : val
  } else {
    // 判断是否存在中文，不存在就是右边的数字
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
    if (!reg.test(val)) {
      if (val.indexOf('.') !== -1 && val.indexOf(',') === -1) {
        // console.log(val)
        val = parseFloat(val).toFixed(2)
      }
    }
  }
  return val
}
function rpAll (str, oldReg, newReg) {
  if (typeof str !== 'string') {
    return ''
  } else {
    return str.replace(new RegExp(oldReg, 'g'), newReg)
  }
}
export default {
  numberFormat,
  numFixed,
  rpAll
}
