const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

// pop up 
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
	wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
	wrapper.classList.remove('active');
});

// btnPopup.addEventListener('click', ()=>{
// 	wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=>{
// 	wrapper.classList.remove('active-popup');
// });

const textEl = document.querySelector('.text-anim');
const textElStr = textEl.innerText;
const textCharArr = textElStr.split('');

textEl.innerText = '';

for (let i=0; i<textCharArr.length; i++){
  textEl.innerHTML += '<span>' + textCharArr[i] + '</span>';
}

let count = 0;
let timer = setInterval(startAnimation, 50);

function startAnimation(){
  const span = textEl.querySelectorAll('span')[count];
  span.classList.add('fade');
  count++;
  
  if (count === textCharArr.length){
    stopAnimation();
    return;
  }
}

function stopAnimation(){
  clearInterval(timer);
  timer = null;
}


