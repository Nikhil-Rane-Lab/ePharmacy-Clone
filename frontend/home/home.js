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

// setInterval(()=>{

// })