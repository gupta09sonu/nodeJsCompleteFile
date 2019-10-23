let assert = require('chai').assert;
let app = require('../app');

// define the test cases
describe('app.js',function() {

    describe('Greet function',function() {

        // Test 1
        it('should be equals to Hello', function () {
            assert.equal(app.greet(),'Hello');
        });

        // Test 2
        it('should be of String Type', function () {
            assert.typeOf(app.greet(),'string');
        });

        // Test 3
        it('should be of of length 5', function () {
            assert.equal(app.greet().length , 5);
        });
    });

    describe('sum function',function() {

        // Test 1
        it('should be equls to 30 for 10,20', function () {
            assert.strictEqual(app.sum(10,20),30);
        });

        // Test 2
        it('should be above 50 for 40 , 30', function () {
            assert.isAbove(app.sum(40,30),50);
        });

        // Test 3
        it('should be below 50 for 20 , 20', function () {
            assert.isBelow(app.sum(20,20),50);
        });

        // Test 4
        it('should be a number', function () {
            assert.typeOf(app.sum(20,20),'number');
        });
    });

    describe('createUser Function' , function() {

        // Test 1
        it('should be equals to an object', function () {
            let employee = {
                name : 'John',
                age : 40
            };
            assert.deepEqual(app.createUser(),employee);
        });
    });

});