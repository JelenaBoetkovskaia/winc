//inspiratie: google search for toggle menu in vanilla JavaScript and for  mouse event docs 

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('mouseenter', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})



//inspiratie: https://javascript.info/dom-attributes-and-properties

let colorBtn = document.querySelectorAll('a[data-btn-color]');
colorBtn.forEach((target) => {
  target.addEventListener("click", (e) => {
    let color = e.target.attributes['data-btn-color'].value;
    //alert(color);
    document.body.style.backgroundColor = color;
  });
});
//moet nog ergens remoeve active ? of een andere weg ? 
//menuBtn.classList.remove('active');??
//menu.classList.toggle('active')??




