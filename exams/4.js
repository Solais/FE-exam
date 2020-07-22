const assert = require('assert');

const question = '实现一个信号灯控制器，红/黄/绿灯依次点亮 300/200/100 毫秒，不断交替，本题需要自己写测试';

// 红灯亮 300 毫秒，换黄灯亮 200 毫秒，换绿灯亮 100 毫秒，再换红灯 ......

let light = ''; // red, yellow, green
async function execute() {
}

/*******测试部分*******/
module.exports = async function doTest() {
  try {
    throw new Error('删除此行，补充测试用例');
    return '通过';
  } catch (ex) {
    return '不通过';
  }
}
