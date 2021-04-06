/* Task 1.
Function which creates a chess boad with 3 params: length, width, symbol.
And returns a string with a chess board. Min length and width = 2; max = 256. */



 export default function createChessBoard(length, width, symbol) {
    const min = 2;
    const max = 256;
    let symbolsAmount = 0;
    let chessBoard = [];
    let oddLine = '';
    let evenLine = '';

    // Validation
        // check that all parameters exist
    if (!width || !length || !symbol) {
        return '{status: failed, reason: There is not width, length or symbol value.}'
    }
        //check that their length is more than min and less tham max
    if (length < min || length > max || width < min || width > max) {
        return `{status: failed, reason: Unvalid params. Length and width must be in range from ${min} to ${max}}`;
    };
        //check that symbol is string
    if (typeof symbol !== 'string') return '{status: failed, reason: Unvalid param. Symbol must be a string.}'

    oddLine = `${symbol[0]} `;
    evenLine = ` ${symbol[0]}`;

    // Count needed amount of symbols
    symbolsAmount = Math.round(width / 2);

    // Create an odd and an even lines
    oddLine = oddLine.repeat(symbolsAmount);
    evenLine = evenLine.repeat(symbolsAmount);

    // Create chess board as an array
    for (let i = 1; i <= length; i++) {
        i % 2 == 0 ? chessBoard.push(evenLine) : chessBoard.push(oddLine);
    }

    // Return chess board as a string
    return chessBoard.join('\n');
};

// console.log(createChessBoard(5,20,'*'));
// console.log(createChessBoard(2,10,'*'));
// console.log(createChessBoard(1,1,'*'));

