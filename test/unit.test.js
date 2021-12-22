const assert = require('assert');
const MyMath = require('../Maths');

describe('Maths test', function() {
    it('tEST IF 2-1=1', function() {
       assert.equal(MyMath.sub(2,1), 1);
       
    })
 });