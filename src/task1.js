/* Task 1.
Function which creates a chess boad with 3 params: length, width, symbol.
And returns a string with a chess board. Min length and width = 2; max = 256. */


 export default function createChessBoard(length, width, symbol) {
    const min = 2;
    const max = 256;
    let symbolsAmount = 0;
    let chessBoard = [];
    let oddLine = `${symbol[0]} `;
    let evenLine = ` ${symbol[0]}`;

    // Validation
    if (length < min || length > max || width < min || width > max || typeof symbol !== 'string') {
        return console.error('{status: failed, reason: Unvalid params}');
    };

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


