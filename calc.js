module.exports = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {if (b === 0) {return 'Error: Division by zero';} return a / b;}
};