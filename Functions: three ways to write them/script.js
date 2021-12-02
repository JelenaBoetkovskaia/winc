//function declaration

function calculate1(a, b) {
    const add = a ** 2 + b ** 2;
    const total = add ** 2;
    return total;
}
calculate1(1, 3);

//function expression

const calculate = function (
    number1,
    number2
) {
    const multiple1 = number1 * number1;
    const multiple2 = number2 * number2;
    const total = multiple1 + multiple2;
    const multiple = total * total;
    return multiple;
}
console.log(calculate(1, 3,));

//arrow function
const total = (a, b) => (a ** 2 + b ** 2) ** 2;
total(1, 3);