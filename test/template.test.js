import {generateMonthesArray, generateWeeksArray, generateMonthName} from '../src/js/template/template';

var assert = require('assert');

describe('template', function() {

  describe('#generateMonthesArray()', function() {
    it(`should return array 
    ["January","February","March","April","May","June","July","August","September","October","November","December"]
    when the function ganarate date for template`,
    function() {
      assert.strictEqual(JSON.stringify(generateMonthesArray()), 
      `["January","February","March","April","May","June","July","August","September","October","November","December"]`);
      });
  });

  describe('#generateWeeksArray()', function() {
    it(`should return array 
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    when the function ganarate date for template`,
    function() {
      assert.strictEqual(JSON.stringify(generateWeeksArray(1)), 
      `["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]`);
      });
  });

  describe('#generateWeeksArray(2)', function() {
    it(`should return array 
    ["Mo","Tu","We","Th","Fr","Sa","Su"]
    when the function ganarate date for template`,
    function() {
      assert.strictEqual(JSON.stringify(generateWeeksArray(2)), 
      `["Mo","Tu","We","Th","Fr","Sa","Su"]`);
      });
  });

  describe('#generateWeeksArray(3)', function() {
    it(`should return array 
    ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    when the function ganarate date for template`,
    function() {
      assert.strictEqual(JSON.stringify(generateWeeksArray(3)), 
      `["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]`);
      });
  });

  describe('#generateMonthName()', function() {
    it(`should return array 
    "February"
    when the function ganarate date for template`,
    function() {
      assert.strictEqual(JSON.stringify(generateMonthName(1)), 
      `"February"`);
      });
  });

});