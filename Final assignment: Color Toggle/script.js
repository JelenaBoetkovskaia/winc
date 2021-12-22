let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('mouseenter', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

const bodyElement = document.body;
//bodyElement.style.backgroundColor = 'blue';
const getTag = document.getElementsByTagNameNS