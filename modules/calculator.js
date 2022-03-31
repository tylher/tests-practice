class Calculator {
    add(...num) {
        let sum = 0;
        [...num].forEach((digit) => {
            sum = sum + digit;
        })
        return sum;
    }

    subtract(a,b) {
        return a - b;
    }

    multiply(...num) {
        let total = 1;
        [...num].forEach((digit, i) => {
                total = total * digit
        })
        return total;
    }

    divide(a, b) {
        return a / b;
    }
}

module.exports = Calculator;