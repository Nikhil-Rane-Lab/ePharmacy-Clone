var time = 30;
var timer = document.getElementById('timer');

function decTimer() {
	if (time > 0) timer.textContent = --time;

	var t1 = document.getElementById('t1').value;
	var t2 = document.getElementById('t2').value;
	var t3 = document.getElementById('t3').value;
	var t4 = document.getElementById('t4').value;
	var t5 = document.getElementById('t5').value;
	var t6 = document.getElementById('t6').value;

	if (t1 != '' && t2 != '' && t3 != '' && t4 != '' && t5 != '' && t6 != '') colorChangeToDark();
	else colorChangeToFaint();
}

setInterval(decTimer, 1000);

function colorChangeToDark() {
	let btn = document.getElementById('btn');
	btn.style.backgroundColor = '#426BB6';
}

function colorChangeToFaint() {
	let btn = document.getElementById('btn');
	btn.style.backgroundColor = '#6889C5B2';
}

import timers from '../component/displayTime/time.js';
timers();
