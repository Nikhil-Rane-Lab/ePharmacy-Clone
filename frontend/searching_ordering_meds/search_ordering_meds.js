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

var enter_btn = document.getElementById("myInput");


enter_btn.addEventListener("keyup", function(event) {
// console.log(enter_btn.value.length);
if (event.keyCode === 13&&enter_btn.value.length>=1) {
event.preventDefault();
redirect_to_displaycart();
}
});
function redirect_to_displaycart(){
   
    window.location=("../product-display/product-display.html");
}