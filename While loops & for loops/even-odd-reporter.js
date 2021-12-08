//1. Even Odd Reporter
for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    const checkFirst = (i) => {
        return i % 2 > 0
    };
    //console.log(checkOdd(i)); true & false
    const evenOdd = i => (checkFirst(i) ? "odd" : "even");

    console.log(evenOdd(i)); //odd&even  0 is even
};






