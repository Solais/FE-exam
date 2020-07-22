const assert = require('assert');

const question = '找出一个字符串中，所有长度为 n 且出现超过 1 次的子串';

function findChildStr(str, n) {

}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepStrictEqual(findChildStr('AAAAAAAABBAAAAAAAA', 8).sort(), ['AAAAAAAA']);
    assert.deepStrictEqual(findChildStr('AAACCCAAACCCAAA', 2).sort(), ['AA', 'AC', 'CA', 'CC']);
    return '通过';
  } catch (ex) {
    return '不通过';
  }
}