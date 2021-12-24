//Inspiratie: google search voor het TOGGLE menu en voor  BONUS Requirements - mouse docs web events(mouseenter+mouseleave).
//1.As a user I can click on the hamburger icon and it will show me a menu of color choices:
let menuBtn = document.querySelector('.menu-btn');
//2.As a user I am allowed to pick a color from the menu(The colors are described in the menu as text).
let menu = document.querySelector('.menu');
//3.As a user I can only click on one color from of the menu, heb voor Minimum Requirements:
//menuBtn.addEventListener('click', () => {
// en voor  BONUS Requirements:
menuBtn.addEventListener('mouseenter', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
//voor Minimum Requirements:
//menu.addEventListener('click', () => menu.classList.remove("active"));
//voor  BONUS Requirements:
menu.addEventListener('mouseleave', () => menu.classList.remove('active'));


//Voor inspiratie: https://javascript.info/dom-attributes-and-properties gebruikt. 

let colorBtn = document.querySelectorAll('a[data-btn-color]');
colorBtn.forEach((target) => {
  target.addEventListener('click', (e) => {
    let color = e.target.attributes['data-btn-color'].value;
    //alert(color); werkt goed en kan evt.ipv # een naam van de kleur tovoegen voor BONUS
    //4.When the color is clicked on the menu, the background of the webpage will change into the picked color:
    document.body.style.backgroundColor = color;
    //5.After the color has been picked, the menu will close:
    menu.classList.remove('active');
  });
});









