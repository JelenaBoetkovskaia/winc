//Part 1: Add a click event to a button:
//a)
const but = document.querySelector('#mybutton')
but
// but.onclick = () => {
//     alert("Button clicked")
// };

//b)
but.addEventListener('click', () => {
    //console.log("click")
    alert("Button clicked too")
});

// Part 2:

const button = document.querySelector('#mybutton2')
const bodyColor = document.querySelectorAll('.blue-background')[0]
button.addEventListener('click', () => {
    //bodyColor.className = "blue-background red-background"
    //or
    //bodyColor.classList.add("red-background")
});

//Part 3:

button.addEventListener('click', () => {
    bodyColor.classList.toggle("red-background");
});