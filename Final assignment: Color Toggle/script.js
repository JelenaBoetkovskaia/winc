let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
//Voor Minimum requirements:
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


let colorBtn = document.querySelectorAll('a[data-btn-color]');
colorBtn.forEach((target) => {
  target.addEventListener('click', (e) => {
    let color = e.target.attributes['data-btn-color'].value;
    //alert(color); werkt goed en kan evt.ipv # een naam van de kleur tovoegen voor BONUS
    document.body.style.backgroundColor = color;
    menu.classList.remove('active');
  });
});









