import CalendarGenerator from '../src/js/core/CalendarGenerator';
var assert = require('assert');

describe('CalendarGenerator', function() {

  var calgen = new CalendarGenerator({});

  describe('#generateMonthDateArray()', function() {
    it('should return array [0,0,0,0,0,1,2] when the function generate date for CalendarGenerator(1,2020)', function() {
      assert.strictEqual(JSON.stringify(calgen.generateMonthDateArray(1,2020)[0]),
                        '[{"month":0,"day":27,"inCurrentMonth":false,"enable":false},{"month":0,"day":28,"inCurrentMonth":false,"enable":false},{"month":0,"day":29,"inCurrentMonth":false,"enable":false},{"month":0,"day":30,"inCurrentMonth":false,"enable":false},{"month":0,"day":31,"inCurrentMonth":false,"enable":false},{"month":1,"day":1,"inCurrentMonth":true,"enable":false},{"month":1,"day":2,"inCurrentMonth":true,"enable":false}]');
    });
  });

  describe('#generateYearArray()', function() {
    it(`should return array 
    [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999] 
    when the function ganarate date for CalendarGenerator()`,
    function() {
      assert.strictEqual(JSON.stringify(calgen.generateYearArray(1998)), 
      '[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999]');
      });
  });

  describe('#generateYearArray()', function() {
    it(`should return array 
    [1580,1581,1582,1583,1584,1585,1586,1587,1588,1589] 
    when the function ganarate date for CalendarGenerator()`,
    function() {
      assert.strictEqual(JSON.stringify(calgen.generateYearArray(1589)), 
      '[1580,1581,1582,1583,1584,1585,1586,1587,1588,1589]');
      });
  });

});