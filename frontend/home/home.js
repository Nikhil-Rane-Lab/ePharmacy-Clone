import { structureTop, structureBottom } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
let bottomStructure = document.querySelector('.structureBottom');
topStructure.innerHTML = structureTop();
bottomStructure.innerHTML = structureBottom();

let diagnostic = document.querySelector('#diagnostic');
diagnostic.addEventListener('click', () => {
	window.location.href = '../diagnostic/diagnostic.html';
});

let focus = document.querySelector('.deliver-to');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('#closeModal');
console.log(closeModal);
modal.style.display = "none";
closeModal.addEventListener('click',()=>{
	modal.style.display = 'none'
});
focus.addEventListener('click',()=>{
	console.log("true");
	modal.style.display = "block";
});
if(modal.style.display == "block"){
	
}

// function timeClock(){
//     setTimeout("timeClock()", 1000);        
//     now = new Date();
//     alert(now);
//     f_date = now.getDate()+" "+strMonth(now.getMonth())+" "+now.getFullYear()+" / "+timeFormat(now.getHours(), now.getMinutes());
//     return f_date;
// }
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
