/* Task 7.
Input: {min:number, max:number / length: number};
Output: [Fibonacci numbers from min to max or with correct length]
 */

export default function sortFibonacciNum (context) {
    let min = context.min;
    let max = context.max;
    let length = context.length;
    let result = [1,1];

    // Validation
    // Check that argument is an object and not an array
    if (typeof context !== 'object' || Array.isArray(context)) {
        return '{status: failed, reason: Unvalid type of params. Should be an object}';
    };
    // Check that there are two keys inside object: min and max or length 
    if (!context.hasOwnProperty('min') || !context.hasOwnProperty('max')) {
        if (!context.hasOwnProperty('length')) {
            return '{status: failed, reason: There is no such key in object as min and max or length}';
        };
    };
    // Check that values are integers
    if (context.hasOwnProperty('min')) {
        if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0 || min > max) {
            return '{status: failed, reason: Values of min and max must be integer numbers and min less than max}';
        };

    };
    if (context.hasOwnProperty('length')) {
        if (!Number.isInteger(length) || length <= 0) {
            return '{status: failed, reason: Values of length must be integer number more than 0}';
        };
    };
    
    // Show the Fibonacci numbers from min to max or according to length param
    for (let i = 0; i < max || i < length; i++ ) {
        let sum = result[result.length - 1] + result[result.length - 2];
        if(context.hasOwnProperty('min')) {
            if (sum >= max)  break;
        }else {
            if (result.length == length) break;
        };
        result.push(sum);
    };
    
    return context.hasOwnProperty('min') ?  result.filter(el => el >= min) : result;
};

// console.log(sortFibonacciNum({min:10, max:100, length:2}));
// console.log(sortFibonacciNum({length: 10}));
// console.log(fiboRange({min:4, max:100}));