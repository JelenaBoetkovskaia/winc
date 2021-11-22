const age = 21;
const firstName = "Bram"
const totalAmount = 135;


if (age >= 18 && age <= 25) {
    console.log("Je mag naar binnen en je krijgt 50% korting!");
} else if (age > 25) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Eerste beer van het huis!");
} else {
    console.log("Volgende jaar beter");
}
if (totalAmount >=45) {
    console.log("Gratis portie(veggie) bitterballen");
} else if (totalAmount >=50 && totalAmount < 100) {
    console.log("Gratis  porties nachos");
} else if (totalAmount >= 100) {
    console.log("Een fles champagne van het huis");
} else {
    console.log("Goede reis");
}
