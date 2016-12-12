var sum = require('../index');
var expect = require('chai').expect;


describe('sum', function() {

    var a = 2;
    var b = 2;

    it('should be adding two numbers', function() {
        expect(a + b).to.equal(4);
    })
})
