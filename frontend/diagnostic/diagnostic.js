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
let select_div = 0;
display.forEach((e) => {
	e.addEventListener('click', () => {
		select_div = e;
		console.log(select_div);
		for (let i = 0; i < 3; i++) {
			let parent1 = display[i].parentElement.firstElementChild.children;
			let price1 = parent1[2];
			let content1 = parent1[3];
			content1.classList.add('display-property-none');
			price1.classList.remove('display-property-none');
			display[i].classList.remove('display-property-none');
		}
		let parent = e.parentElement.firstElementChild.children;
		let price = parent[2];
		let content = parent[3];
		content.classList.remove('display-property-none');
		price.classList.add('display-property-none');
		e.classList.add('display-property-none');
	});
	console.log('select_div:', select_div);
});
