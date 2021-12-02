//function declaration

function calculate1(a, b) {
    const sum = a ** 2 + b ** 2;
    const total = sum ** 2;
    return total;
}
calculate1(1, 3); //100

//function expression

const calculate2 = function (
    number1,
    number2
) {
    const multiple1 = number1 * number1;
    const multiple2 = number2 * number2;
    const total = multiple1 + multiple2;
    const multiple = total * total;
    return multiple;
}
console.log(calculate2(1, 3,));//100

//arrow function
const calculate3 = (a, b) => (a ** 2 + b ** 2) ** 2;
calculate3(1, 3); //100



//all three functions give the same result without giving them the same arguments.