import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

let home = document.querySelector('#home');
home.addEventListener('click', () => {
	window.location.href = '../home/home.html';
});
