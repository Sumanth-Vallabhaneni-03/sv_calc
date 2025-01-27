const readline = require('readline');
const calc = require('./calc');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const calculator = () => {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter operation (+, -, *, /): ', (op) => {
            rl.question('Enter second number: ', (num2) => {
                const n1 = parseFloat(num1), n2 = parseFloat(num2);
                const result = calc[op] ? calc[op](n1, n2) : 'Invalid operation';
                console.log(`Result: ${result}`);
                rl.question('Another calculation? (y/n): ', (answer) => answer.toLowerCase() === 'y' ? calculator() : rl.close());
            });
        });
    });
};

calculator();