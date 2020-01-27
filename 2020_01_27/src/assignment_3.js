const calculateSum = (a, b, callback) => callback(`${a} + ${b} = ${a+b}`);

const sum = calculateSum;
sum(4, 5, console.log);
