var a = document.querySelector('#logo > div:nth-child(1)');
var b = document.querySelector('#logo > div:nth-child(2)');
var c = document.querySelector('#logo > div:nth-child(3)');
var d = document.querySelector('#logo > div:nth-child(4)');

function fun1() {
	a.style.border = '2px solid #426BB6';
	b.style.border = '';
	c.style.border = '';
	d.style.border = '';
	clearAll();
	enableButton();
}

function fun2() {
	b.style.border = '2px solid #426BB6';
	a.style.border = '';
	c.style.border = '';
	d.style.border = '';
	clearAll();
	enableButton();
}

function fun3() {
	c.style.border = '2px solid #426BB6';
	a.style.border = '';
	b.style.border = '';
	d.style.border = '';
	clearAll();
	enableButton();
}

function fun4() {
	d.style.border = '2px solid #426BB6';
	a.style.border = '';
	b.style.border = '';
	c.style.border = '';
	clearAll();
	enableButton();
}

function clearAll() {
	a1.style.border = '';
	b1.style.border = '';
	c1.style.border = '';
	d1.style.border = '';
	enableButton();
}

var a1 = document.querySelector('#a1');
var b1 = document.querySelector('#a2');
var c1 = document.querySelector('#a3');
var d1 = document.querySelector('#a4');

function fun5() {
	a1.style.border = '2px solid #426BB6';
	b1.style.border = '';
	c1.style.border = '';
	d1.style.border = '';
	clearAll2();
}

function fun6() {
	b1.style.border = '2px solid #426BB6';
	a1.style.border = '';
	c1.style.border = '';
	d1.style.border = '';
	clearAll2();
}

function fun7() {
	c1.style.border = '2px solid #426BB6';
	a1.style.border = '';
	b1.style.border = '';
	d1.style.border = '';
	clearAll2();
}

function fun8() {
	d1.style.border = '2px solid #426BB6';
	a1.style.border = '';
	b1.style.border = '';
	c1.style.border = '';
	clearAll2();
}

function clearAll2() {
	d.style.border = '';
	a.style.border = '';
	b.style.border = '';
	c.style.border = '';
	enableButton();
}

function enableButton() {
	document.getElementById('lbtn').style.backgroundColor = '#426BB6';
	document.getElementById('lbtn').style.color = 'white';
}

// import timer from '../component/displayTime/time.js';
// timer();
