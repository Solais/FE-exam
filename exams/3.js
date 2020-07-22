const assert = require('assert');

const question = '重新排列一个字符串，使得每个相邻字符都不同，列出所有情况';

// 字符串只包含小写字母或者数字

function reorganize(str) {
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepStrictEqual(reorganize('aabb').sort(), ['abab', 'baba']);
    assert.deepStrictEqual(reorganize('aaabbbb').sort(), ['bababab']);
    assert.deepStrictEqual(
      reorganize('aabbbc').sort(), 
      ['ababcb','abcbab','bababc','babacb','babcab','babcba','bacbab','bcabab','bcbaba','cbabab']
    );
    assert.deepStrictEqual(reorganize('1bbbbb'), []);
    return '通过';
  } catch (ex) {
    return '不通过';
  }
}