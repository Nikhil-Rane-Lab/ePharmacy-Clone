import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

let diagnostic = document.querySelector('#diagnostic');
diagnostic.addEventListener('click', () => {
	window.location.href = '../diagnostic/diagnostic.html';
});
let home = document.querySelector('#home');
home.addEventListener('click', () => {
	window.location.href = '../home/home.html';
});

let form = document.querySelector('#search-med');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let keyword = document.querySelector('#myInput').value;

	if (localStorage.getItem('searchKeyword') === null) {
		localStorage.setItem('searchKeyword', JSON.stringify(''));
	}
	localStorage.setItem('searchKeyword', JSON.stringify(keyword));
});

import timer from '../component/displayTime/time.js';
timer();

var enter_btn = document.getElementById('myInput');

enter_btn.addEventListener('keyup', function(event) {
	if (event.keyCode === 13 && enter_btn.value.length >= 1) {
		event.preventDefault();
		redirect_to_displaycart();
	}
});
function redirect_to_displaycart() {
	window.location = '../product-display/product-display.html';
}

let back = document.querySelector('.diagnost-text>img');
back.addEventListener('click', () => {
	window.location.href = '../home/home.html';
});
