//Checking if a number is big (functions that do something).

const check = function (a) {
    const number = a;
    if (number <= 100) {
        return false;
    }
    return true;
};

let b = check(100);
console.log(b);
let c = check(-100);
console.log(c);
let d = check(200);
console.log(d);
let e = check(20);
console.log(e);

//Bouncer at a club(functions that do something).
const people = 50;
const age = 20;
function checkPeople() {
    return people
}
function checkAge() {
    return age
}

const output = `
${people > 50 ? 'Welcome onb board 👍 and show your ID' : 'Its too busy now, come back later😒'}
${age >= 21 ? 'You are in ' : 'This is a club for adults🤦‍♂️.'}
`
console.log(output)

//Calculating the average (functions that produce something).


function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

const arr = [1,2,3,4,5];

