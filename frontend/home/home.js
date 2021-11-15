import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

import timer from '../component/displayTime/time.js';
timer();

let diagnostic = document.querySelector('#diagnostic');
diagnostic.addEventListener('click', () => {
	window.location.href = '../diagnostic/diagnostic.html';
});

let cart = document.querySelector('.cart');
cart.addEventListener('click', () => {
	window.location.href = '../cart/cart.html';
});

// let focus = document.querySelector('.deliver-to');
// let modal = document.querySelector('.modal');
// let closeModal = document.querySelector('#closeModal');
// console.log(closeModal);
// modal.style.display = "none";
// closeModal.addEventListener('click',()=>{
// 	modal.style.display = 'none'
// });
// focus.addEventListener('click',()=>{
// 	console.log("true");
// 	modal.style.display = "block";
// });
// if(modal.style.display == "block"){

// }

// setTimeout(timer,1000 );
// }
