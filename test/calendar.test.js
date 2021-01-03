import CalendarGenerator from '../src/js/core/CalendarGenerator';
var assert = require('assert');

describe('CalendarGenerator', function() {

  var calgen = new CalendarGenerator({});

  describe('#generateMonthDateArray()', function() {
    it('should return array [0,0,0,0,0,1,2] when the function generate date for CalendarGenerator(1,2020)', function() {
      assert.strictEqual(JSON.stringify(calgen.generateMonthDateArray(1,2020)[0]), "[0,0,0,0,0,1,2]");
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