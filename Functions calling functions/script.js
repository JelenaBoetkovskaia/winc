//Hey kiddo, solution 1
const checkAge = age => {
    return age <= 18;
};
const greet = (age) => {
    const chekfirst = checkAge(age); {
        if (chekfirst) {
            return "Hey kiddo";
        } else {
            return "Hello there";
        }
    }
};
console.log(greet(20));//Hello there
console.log(greet(16));//Hey kiddo

//Hey kiddo, solution 2

const checkAge = age => {
    return age <= 18;
}
//checkAge(20);
const greet = age => checkAge(age) ? "hey kiddo" : "hello there"

console.log(greet(20));//Hello there
console.log(greet(16));//Hey kiddo

//VAT exercise 1
const calcVat = (netAmt) => {
    const vatHoog = netAmt * 0.21;
    return vatHoog;
};
//const Laag = netAmt * 0.09;
//return Laag;
//};
//const vatNull = 0;
//return vatNull;
//};

//console.log(calcVat(2));
////0,42


const inclVat = function (netAmt) {
    const vat = calcVat(netAmt);
    const totaal = vat + netAmt;
    return totaal;

};
console.log(inclVat(1));//1.21
console.log(inclVat(10));//12.1
console.log(inclVat(15));//18.15
console.log(inclVat(1115));//1349.15

//VAT exercise 2 In this exercise we're going to calculate the base price and VAT amount. 
//The main function you make should take the amount including VAT and the VAT percentage. 
//The return value should be an array with two elements: base price and VAT amount. 
//Again: make sure you use two functions, where the main one calls another function to do part of the calculation.



const calcVat = (inclPrijs) => {
    const vat = inclPrijs - inclPrijs / 1.21;
    return vat;
};
//console.log(calcVat(1));0.17355371900826444

const calcExl = (inclPrijs, vat) => {
    const useVat = calcVat(inclPrijs);
    const exl = inclPrijs - useVat;
    return [exl, useVat];
}
console.log(calcExl(1, 0.21),);
// (2) [0.8264462809917356, 0.17355371900826444]
// 0: 0.8264462809917356
// 1: 0.17355371900826444
// length: 2
// [[Prototype]]: Array(0)