const array = ['yellow', 'blue', 'red', 'orange'];
while (array[''] > 0) {
    console.log('');
    array['']++;
};

const array = ['yellow', 'blue', 'red', 'orange'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

const array = ['yellow', 'blue', 'red', 'orange'];
array.forEach(element => console.log(element));

// How many lines does my for loop and my while loop take?   (3 of 4)
// How many lines does my forEach method take?  (2)
// What other advantages do using an array method have over a for or a while loop? (Do't see any advantagesNeed more examples)
//For example, which method do you find easier to read? Why? (Only method's .push and .lenght, got explaned before;)
// Can you use an array method on an object? 
//can't see all arrow.methods on [prototype] object.
// The answer is no.
//  Suppose you have an object with 45 properties. 
//  Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. 
//  Try this(? which one??) piece  of code and use an object with 5 properties for it.

//Code1:
const person = {
    name: 'Jelena',
    age: 51,
    isProgammer: false,
    languages: ['ru', 'en', 'nl'],
    greet() {
        console.log('greet from person')
    }
};
//console.log(person)
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key);
        console.log('value:', person[key])
    }
};
//  key: name
//  value: Jelena
//  key: age
//  value: 51
//  key: isProgammer
//  value: false
//  key: languages
//  value: (3) ['ru', 'en', 'nl']
//  key: greet
//  value: ƒ greet() {
//         console.log('greet from person')
//     }
// undefined

//Code2:
const person = {
    name: 'Jelena',
    age: 51,
    isProgammer: false,
    languages: ['ru', 'en', 'nl'],
    greet() {
        console.log('greet from person')
    }
};
//const keys = Object.keys(person);
//console.log(keys)
keys.forEach((key) => {
    console.log('key:', key);
    console.log('value:', person[key])

})
//  key: name
//  value: Jelena
//  key: age
//  value: 51
//  key: isProgammer
//  value: false
//  key: languages
//  value: (3) ['ru', 'en', 'nl']
//  key: greet
//  value: ƒ greet() {
//         console.log('greet from person')
//     }
// undefined

// Are you iterating now?
//no idea, looks like;
//need more information, better lessons and more video with examples; 
