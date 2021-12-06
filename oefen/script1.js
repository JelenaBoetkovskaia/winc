const checkAge = age => {
    return age <= 18;
};
//checkAge();

const greet = age => {
    const chekFirst = checkAge(); {
        if (age)
            return "Hey kiddo";
    }
    return "Hello there";
};
console.log(greet(88));
