import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

let diagnostic = document.querySelector('#diagnostic');
diagnostic.addEventListener('click', () => {
	window.location.href = '../diagnostic/diagnostic.html';
});

timer();

function timer() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var sec = currentTime.getSeconds();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (sec < 10) {
		sec = '0' + sec;
	}
	var t_str = hours + ':' + minutes + ':' + sec + ' ';
	if (hours > 11) {
		t_str += 'PM';
	} else {
		t_str += 'AM';
	}
	let t_insert = document.querySelector('.left-top');
	t_insert.innerHTML = t_str;	

	setTimeout(timer,1000 );
}

