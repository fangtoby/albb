
const chai = require('chai');
const { assert, expect, should } = chai;

/******************单元测试 demo start*******************/
function add(x, y) {
  return x + y;
}
describe('add 函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
});
/******************单元测试 demo end*******************/