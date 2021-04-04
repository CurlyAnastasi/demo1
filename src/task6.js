
export default function numericSequence(length, square) {
    let arr = [];

    for (let i = 1; i <= Infinity; i++) {
        if (i * i > square) {
            arr.push(i);
        };
        if (arr.length == length) break;
    };

    console.log(arr.join(' '));
};

// console.log(numericSequence (10, 64));