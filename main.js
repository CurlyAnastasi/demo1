import  {createChessBoard} from './src/task1.js';
import {analyseEnvelopes} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {findPalindrome} from './src/task4.js';
import {findLuckyTickets} from './src/task5.js';
import {numericSequence} from './src/task6.js';
import {sortFibonacciNum} from './src/task7.js';


export {createChessBoard, analyseEnvelopes, sortFibonacciNum,sortTriangles,findLuckyTickets,findPalindrome,numericSequence};

// TASK 1
// console.log(createChessBoard(5,20,'*'));
// console.log(createChessBoard(5,20,4));
// console.log(createChessBoard(20,'*'));
// console.log(createChessBoard(5,1,'*'));
// console.log(createChessBoard(5,258,'*'));

// TASK 2 
// console.log(analyseEnvelopes({a:2,b:5},{c:2,d:4}));
// console.log(analyseEnvelopes({v:2,b:5},{c:2,d:4}));
// console.log(analyseEnvelopes({a:-2,b:5},{c:2,d:4}));
// console.log(analyseEnvelopes(4,{c:2,d:4}));

// TASK 3
// console.log(sortTriangles([{ vertices: 'ABC', a: 10, b: 20,c: 22.36}, {vertices: 'BCD', b: 6, c:10, d: 15}, {vertices: 'DEF', d: 5, e:10, f: 15.3}]));
// console.log(sortTriangles([{ vertices: 'ABC', b: 10, b: 20,c: 22}, {vertices: 'BCD', b: 6, c:10, d: 15.3}, {vertices: 'DEF', d: 10, e:10, f: 15.3}]));
// console.log(sortTriangles([{ vertices: 'ABC', a: 10, b: 15, c: 22},{ vertices: 'CDE', e: 10, c: 20, d: 22.36},{ vertices: 'CDE', e: 5, c: 5, d: 5},{ vertices: 'FGH', f: 50, g: 25, h: 50}]));

// TASK 4
// console.log(findPalindrome(54322345));
// console.log(findPalindrome('1112'));
// console.log(findPalindrome(9));
// console.log(findPalindrome());

// TASK 5
// console.log(findLuckyTickets({min:1234,max:9999}));
// console.log(findLuckyTickets({min:2,max:5}));
// console.log(findLuckyTickets(2));
// console.log(findLuckyTickets({min:2.2,max:5}));
// console.log(findLuckyTickets({max:5}));
// console.log(findLuckyTickets({min:2,max:-5}));
// console.log(findLuckyTickets({min:2,max:9999991}));
// console.log(findLuckyTickets({length: -6}));

// TASK 6
// console.log(numericSequence (10, 64));
// console.log(numericSequence ('10', 64));
// console.log(numericSequence (10, 64.5));
// console.log(numericSequence (-10, 64));
// console.log(numericSequence (64));

// TASK 7
// console.log(sortFibonacciNum({min:10, max:100, length:2}));
// console.log(sortFibonacciNum({length: 10}));
// console.log(sortFibonacciNum());
// console.log(sortFibonacciNum(5));
// console.log(sortFibonacciNum({max:100}));
// console.log(sortFibonacciNum({length: -10}));
