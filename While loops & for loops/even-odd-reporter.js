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
// Is 0 even or odd?
// VM330:9 even
// VM330:2 Is 1 even or odd?
// VM330:9 odd
// VM330:2 Is 2 even or odd?
// VM330:9 even
// VM330:2 Is 3 even or odd?
// VM330:9 odd
// VM330:2 Is 4 even or odd?
// VM330:9 even
// VM330:2 Is 5 even or odd?
// VM330:9 odd
// VM330:2 Is 6 even or odd?
// VM330:9 even
// VM330:2 Is 7 even or odd?
// VM330:9 odd
// VM330:2 Is 8 even or odd?
// VM330:9 even
// VM330:2 Is 9 even or odd?
// VM330:9 odd
// VM330:2 Is 10 even or odd?
// VM330:9 even
// VM330:2 Is 11 even or odd?
// VM330:9 odd
// VM330:2 Is 12 even or odd?
// VM330:9 even
// VM330:2 Is 13 even or odd?
// VM330:9 odd
// VM330:2 Is 14 even or odd?
// VM330:9 even
// VM330:2 Is 15 even or odd?
// VM330:9 odd
// VM330:2 Is 16 even or odd?
// VM330:9 even
// VM330:2 Is 17 even or odd?
// VM330:9 odd
// VM330:2 Is 18 even or odd?
// VM330:9 even
// VM330:2 Is 19 even or odd?
// VM330:9 odd
// VM330:2 Is 20 even or odd?
// VM330:9 even
// undefined





