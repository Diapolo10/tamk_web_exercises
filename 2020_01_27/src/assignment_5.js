'use strict';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const user_nums = process.argv.slice(2).map((n) => parseInt(n, 10)).sort((a, b) => a-b); // Array<Number>

var result = [];

while (result.length != 7) {
    var num = randomIntFromInterval(1, 40);
    if (!result.includes(num)) {
        result.push(num);
    }
}

result = result.map((n) => parseInt(n, 10)).sort((a, b) => a-b);


if (user_nums.length < 1) {
    console.log("Not enough parameters. Usage: 'node path/to/script.js {lottery_numbers}'\n\nExample: node ./assignment_5.js 3 14 15 9 26 39 27");
}
else {

    // console.log(user_nums); 
    // console.log(result);

    var matches = 0;
    for (const num of result) {
        if (user_nums.includes(num)) {
            ++matches;
        }
    }

    console.log(`${matches} oli oikein.`);
}
