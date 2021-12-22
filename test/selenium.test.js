const webdriver = require('selenium-webdriver');
const assert = require('assert');
const MyMath = require('../Maths');

describe('Selenium tests', function() {
   
    it('Test if 1 equals 1', async function() {
       assert.equal(1,1);
    });

    it('Test if 1 equals 2', async function() {
        assert.equal(1,2);
     });
});

describe('Maths test', function() {
   it('tEST IF 1+1=2', function() {
      
      
      assert.equal(MyMath.add(1,1), 2);
      
   })

});

describe('Maths test', function() {
   it('tEST IF 2-1=1', function() {
      
      
      assert.equal(MyMath.sub(2,1), 1);
      
   })

});