import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

let home = document.querySelector('#home');
home.addEventListener('click', () => {
	window.location.href = '../home/home.html';
});

let display = document.querySelectorAll('.right-popular');
console.log('display:', display);

display.forEach((e) => {
	e.addEventListener('click', () => {
		console.log(e.parentElement.firstElementChild);
		let parent = e.parentElement.firstElementChild.children;
		console.log(parent);

		console.log(parent.length);
		let price = parent[2];
		let content = parent[3];
		content.classList.remove('display-property-none');
		price.classList.add('display-property-none');
		e.classList.add('display-property-none');
	});
});

