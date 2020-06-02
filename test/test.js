import DPST from '../src/js/core/DPST';
var assert = require('assert');

describe('DPST', function() {
  describe('#generateMonthDateArray()', function() {
    it('should return array [0,0,0,0,0,1,2] when the function generate date for DPST(1,2020)', function() {
      assert.equal(JSON.stringify(new DPST(1,2020).generateMonthDateArray()[0]), "[0,0,0,0,0,1,2]");
    });
  });
});

describe('DPST', function(){
  describe('#generateMonthDateArray()', function() {
    it(`should return array 
    [[0,0,0,0,1,2,3],[4,5,6,7,8,9,10],[11,12,13,14,15,16,17],[18,19,20,21,22,23,24],[25,26,27,28,29,30,31],[0,0,0,0,0,0,0]] 
    when the function ganarate date for DPST()`,
    function() {
      assert.strictEqual(JSON.stringify(new DPST().generateMonthDateArray()), 
      '[[0,0,0,0,1,2,3],[4,5,6,7,8,9,10],[11,12,13,14,15,16,17],[18,19,20,21,22,23,24],[25,26,27,28,29,30,31],[0,0,0,0,0,0,0]]');
      });
  });
});