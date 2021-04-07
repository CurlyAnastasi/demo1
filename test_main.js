
import {createChessBoard,analyseEnvelopes,sortFibonacciNum,sortTriangles,
        findLuckyTickets,findPalindrome,numericSequence} from './main.js';

mocha.setup('bdd');

const assert = chai.assert;

describe('Task 1', () => {
    it('Result = string with a chess board', () => {
        assert.equal(createChessBoard(2,10,'*'), '* * * * * \n * * * * *')
    });
    it('Symbol is not a string = error', () => {
        assert.deepEqual(createChessBoard(10,10,3),{
            status:'failed',
            reason: 'Unvalid param. Symbol must be a string.'
        });
    });
    it('One of the params is absent = error', () => {
        assert.deepEqual(createChessBoard(3,4), {
            status:'failed',
            reason: 'There is not width, length or symbol value.'
        })
    });
    it('All of the params are absent = error', () => {
        assert.deepEqual(createChessBoard(), {
            status:'failed',
            reason: 'There is not width, length or symbol value.'
        })
    });
    it('One of the params less than min value = error', () => {
        assert.deepEqual(createChessBoard(-1,3,'*'), {
            status:'failed',
            reason: 'Unvalid params. Length and width must be more than 2 and less than 256'
        })
    });
    it('One of the params more than max value = error', () => {
        assert.deepEqual(createChessBoard(3,259,'*'), {
            status:'failed',
            reason: 'Unvalid params. Length and width must be more than 2 and less than 256'
        })
    });
});

describe('Task 2', () => {
    it('Result = number of larger envelop', () => {
        assert.equal(analyseEnvelopes({a:2,b:4},{c:2, d:5}), 2)
    });
    it('Key is uncorrect = error', () => {
        assert.deepEqual(analyseEnvelopes({d:5,b:3}, {c:8, d:6}), {
            status: 'failed',
            reason: 'There is no such key in object as a, b, c or d'
        });
    });
    it('Key is absent = error', () => {
        assert.deepEqual(analyseEnvelopes({c:8, d:6}), {
            status: 'failed',
            reason: 'Unvalid type of params. Should be two objects'
        });
    });
    it('Param is not an object = error', () => {
        assert.deepEqual(analyseEnvelopes(2,{c:8, d:6}), {
            status: 'failed',
            reason: 'Unvalid type of params. Should be two objects'
        });
    });
    it('Value is less than min = error', () => {
        assert.deepEqual(analyseEnvelopes({a:-1,b:3},{c:8, d:6}), {
            status: 'failed',
            reason: 'Unvalid values. Must be numbers from 1 to 1000000'
        });
    });
    it('Value is more than max = error', () => {
        assert.deepEqual(analyseEnvelopes({a:2,b:3},{c:3, d:10000009}), {
            status: 'failed',
            reason: 'Unvalid values. Must be numbers from 1 to 1000000'
        });
    });
});

describe('Task 3', () => {
    it ('Result = sorted array of triangles', () => {
        assert.deepEqual(sortTriangles([{vertices: 'ABC', a: 10, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), ['BCD', 'ABC'])
    });
    it ('Parameter is not an array = error', () => {
        assert.deepEqual(sortTriangles({vertices: 'ABC', a: 10, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}), {
            status: 'failed',
            reason: 'Unvalid type of params. Should be an array'
        });
    });
    it ('Verticles have not got 3 letters = error', () => {
        assert.deepEqual(sortTriangles([{vertices: 'AB', a: 10, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid params in triangle. Three vertices are needed. Name of vertice includes 3 letters'
        });
    });
    it ("Verticle's name is not a string = error", () => {
        assert.deepEqual(sortTriangles([{vertices: 2, a: 10, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid params in triangle. Three vertices are needed. Name of vertice includes 3 letters'
        });
    });
    it ("Unpossible to create a triangle with such sides = error", () => {
        assert.deepEqual(sortTriangles([{vertices: 'ABC', a: 1, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid params of side in triangle. Unposible to create a triangle with such sides'
        });
    });
    it ("Side less than 1 = error", () => {
        assert.deepEqual(sortTriangles([{vertices: 'ABC', a: -1, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid type of params in triangle. Must be a positive number. And names of sides are simillar to vertices'
        });
    });
    it ("Value of side is not a number = error", () => {
        assert.deepEqual(sortTriangles([{vertices: 'ABC', a: '5', b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid type of params in triangle. Must be a positive number. And names of sides are simillar to vertices'
        });
    });
    it ("There isn't a needed side = error", () => {
        assert.deepEqual(sortTriangles([{vertices: 'ABC', v: 5, b: 20,c: 22}, {vertices: 'BCD', b: 8, c:10, d: 15}]), {
            status: 'failed',
            reason: 'Unvalid type of params in triangle. Must be a positive number. And names of sides are simillar to vertices'
        });
    });
});

describe('Task 4', () => {
    it('Result = palindrome',() => {
        assert.equal(findPalindrome(11123454),454);
    });
    it('Argument is not a number = error',() => {
        assert.deepEqual(findPalindrome('11123454'),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be a number. Length more that 2, but less than 20'
        });
    });
    it("Argument's length is less than 2 = error",() => {
        assert.deepEqual(findPalindrome(9),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be a number. Length more that 2, but less than 20'
        });
    });
    it("Argument's length is more than 20 = error",() => {
        assert.deepEqual(findPalindrome(8888888856674322456789908),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be a number. Length more that 2, but less than 20'
        });
    });
});

describe('Task 5', () => {
    it('Result = object with winner and amount',() => {
        assert.deepEqual(findLuckyTickets({min:2, max:5}),{ winner: 'no winner', simpleWay: 0, hardWay: 0 });
    });
    it('Argument is not an object = error',() => {
        assert.deepEqual(findLuckyTickets('11123454'),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be an object'
        });
    });
    it('Min value is absent = error',() => {
        assert.deepEqual(findLuckyTickets({max:5}),{
            status: 'failed',
            reason: 'There is no such key in object as min or max'
        });
    });
    it('Value is not an integer = error',() => {
        assert.deepEqual(findLuckyTickets({min:2.2, max:5}),{
            status: 'failed',
            reason: 'Values of min and max must be integer numbers'
        });
    });
    it('Value is less than 0 = error',() => {
        assert.deepEqual(findLuckyTickets({min:-3, max:3}),{
            status: 'failed',
            reason: 'Values of min and max must be from 0 to 999999 and min less than max'
        });
    });
    it('Value is more than 999999  = error',() => {
        assert.deepEqual(findLuckyTickets({min:6, max:9999991}),{
            status: 'failed',
            reason: 'Values of min and max must be from 0 to 999999 and min less than max'
        });
    });
});

describe('Task 6', () => {
    it('Result = palindrome',() => {
        assert.equal(numericSequence(10,90),'10 11 12 13 14 15 16 17 18 19');
    });
    it('Argument is not a number = error',() => {
        assert.deepEqual(numericSequence('a',10),{
            status: 'failed',
            reason: `Values of length and min square must be integer numbers from 1 to 1000000`
        });
    });
    it('Argument is not an integer number = error',() => {
        assert.deepEqual(numericSequence(2.2,10),{
            status: 'failed',
            reason: `Values of length and min square must be integer numbers from 1 to 1000000`
        });
    });
    it('Argument is less than min = error',() => {
        assert.deepEqual(numericSequence(4,0),{
            status: 'failed',
            reason: `Values of length and min square must be integer numbers from 1 to 1000000`
        });
    });
    it('Argument is more tham max = error',() => {
        assert.deepEqual(numericSequence(5,10000004),{
            status: 'failed',
            reason: `Values of length and min square must be integer numbers from 1 to 1000000`
        });
    });
    it('Argument is absent = error',() => {
        assert.deepEqual(numericSequence(),{
            status: 'failed',
            reason: `Values of length and min square must be integer numbers from 1 to 1000000`
        });
    });
});

describe('Task 7', () => {
    it('Result = sorted array of Fibonacci numbers',() => {
        assert.deepEqual(sortFibonacciNum({min:10, max:80, length:2}),[ 13, 21, 34, 55 ]);
    });
    it('Argument is not an object = error',() => {
        assert.deepEqual(sortFibonacciNum('11123454'),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be an object'
        });
    });
    it('No arguments = error',() => {
        assert.deepEqual(sortFibonacciNum(),{
            status: 'failed',
            reason: 'Unvalid type of params. Should be an object'
        });
    });
    it('Argument min is absent = error',() => {
        assert.deepEqual(sortFibonacciNum({max:80}),{
            status: 'failed',
            reason: 'There is no such key in object as min and max or length'
        });
    });
    it('Value of max is not an integer = error',() => {
        assert.deepEqual(sortFibonacciNum({min:8, max:80.7, length:2}),{
            status: 'failed',
            reason: 'Values of min and max must be integer numbers and min less than max'
        });
    });
    it('Value of min is more than max = error',() => {
        assert.deepEqual(sortFibonacciNum({min:80, max:8, length:2}),{
            status: 'failed',
            reason: 'Values of min and max must be integer numbers and min less than max'
        });
    });
    it('Length is less than 1 = error',() => {
        assert.deepEqual(sortFibonacciNum({length:0}),{
            status: 'failed',
            reason: 'Values of length must be integer number more than 0'
        });
    });
});


mocha.run();