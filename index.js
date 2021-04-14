
import { createServer } from 'http';
import { parse } from 'url';
import { createChessBoard } from './src/task1.js';
import { analyseEnvelopes } from './src/task2.js';


createServer((req,res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });

    // get the task number
    const { task } = parse(req.url, true).query;

    // display result of the task
    if( task == 1) {
        const {length, width, symbol } = parse(req.url,true).query;
        // change type of length and width to numbers
        const result = createChessBoard(+length,+width,symbol);
        res.write(result);
    } else if (task == 2) {
        let {a, b, c, d} = parse(req.url, true).query;
         // change type of sides to numbers
        [a,b,c,d] = [+a, +b, +c, +d];
        const result = analyseEnvelopes({a,b},{c,d});
        res.write(`${result}`);
    } else {
        res.write(`Put the correct data`);
    }

res.end()
}).listen(8000);

console.log('Server on http://localhost:8000');
console.log('Server on http://localhost:8000/?task=1&length=60&width=60&symbol=*');
console.log('Server on http://localhost:8000/?task=2&a=2&b=4&c=3&d=6');

