const app = require('../app');
const utility  = require('../utility');

describe('App.js', function () {

    // Sum Function
    describe('Sum Function', function () {

        // Test 1
        test('adds 1 + 2 to equal 3', () => {
            expect(app.sum(1,2)).toBe(3)
        });
    });

    // Greet Function
    describe('Greet Function', function () {

        // Test 1
        test('Say Good Morning to John', () => {
            expect(app.greet('John')).toBe('Good Morning John');
        });
    });
});