//No arguments(f.declaration)
function showMessage() {
    console.log('The wall has been painted red')
}
showMessage();

//Single argument,
//a)function declaration
function showMessage(color) {
    console.log('The wall has been painted ', color)
}
showMessage('green')
showMessage('red')
//b) function expression:
const showMessage2 = function showMessage2(color) {
    console.log('The wall has been painted ', color)
};
showMessage2('red')
showMessage2('green')
//7. The function without an argument : string is  undefined.
console.log(typeof showMessage2)
console.dir(showMessage2)

//Multiple arguments
const paint = function (color1, color2) {
    console.log('The north wall has been painted', color1, 'and the south wall has been painted', color2)
};

const northWall = "orange";
const southWall = "grey";

paint(northWall, southWall);

const paint = function (color1, color2) {
    console.log('The north wall has been painted', color1, 'and the south wall has been painted', color2)
};

const northWall = "orange";
const southWall = "grey";

paint(northWall, southWall);
/*
6.does the order of the arguments matter when calling the function?
- yes
7.What happens if you switch the order of the argument in the function definition?
-the order of output is also changing
8.what happens if you change the order of the arguments in the function definition and when calling the function?
-the order of output is also changing
*/
