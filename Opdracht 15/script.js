//Part 1: Objects
let person = {
    firstName: "Lena",
    age: 50,
    evaluations: [7, 10, 9],
};
person['firstName'] = 'Len';
person.age = 51;
console.log(person);//{firstName: 'Len', age: 51, evaluations: Array(3)}
console.log(person.firstName);//Len
console.log(person.age);//51
console.log(person.evaluations);//(3) [7, 10, 9]
/*
value type of person evaluation is array
*/

//Part 2: Arrays
let selectedColors = ['red', 'blue', 'green'];
console.log(selectedColors.length);//3
console.log(selectedColors[0]);//red
selectedColors.push('yellow');
selectedColors.push(5);
selectedColors.push({ greeting: "hi, I am an object" });
console.log(selectedColors);//(6) ['red', 'blue', 'green', 'yellow', 5, {…}]- array with index 6 
console.log(selectedColors[5]);//{greeting: 'hi, I am an object'}- object

//Part 3: A "real-life" object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

console.log("Name cat breed 3:", catBreeds[2].name);// American Bobtail
console.log("Energy level cat breed 1:", catBreeds[0].energy_level);//5
console.log("First temperament cat breed 2:", catBreeds[1].temperament[0]);// Affectionate
console.log("Last temperament cat breed 3:", catBreeds[2].temperament[4]);// Sensitive
console.log("Favorite food cat breed 3:", catBreeds[2].food.favourite_food);// meaty things












